import {Tag} from "./Tag";
import {TagsFilter} from "./TagsFilter";
import {And} from "./And";
import {Utils} from "../../Utils";
import ComparingTag from "./ComparingTag";
import {RegexTag} from "./RegexTag";
import SubstitutingTag from "./SubstitutingTag";
import {Or} from "./Or";
import {AndOrTagConfigJson} from "../../Models/ThemeConfig/Json/TagConfigJson";

export class TagUtils {
    static ApplyTemplate(template: string, tags: any): string {
        for (const k in tags) {
            while (template.indexOf("{" + k + "}") >= 0) {
                const escaped = tags[k].replace(/</g, '&lt;').replace(/>/g, '&gt;');
                template = template.replace("{" + k + "}", escaped);
            }
        }
        return template;
    }

    static KVtoProperties(tags: Tag[]): any {
        const properties = {};
        for (const tag of tags) {
            properties[tag.key] = tag.value
        }
        return properties;
    }   
    
    private static getSideVersionOfKey(key, side: ("left" | "right" | "both")) {
        // e.g. for cycleway:surface, this should return cycleway:left:surface
        const splittedKeys = key.split(":")
        splittedKeys.splice(1, 0, side)
        return splittedKeys.join(":")
    }

    /**
     * Rewrites the properties to have a left and a right version for every specified key
     * e.g. {"sidewalk": "yes"} -> {"sidewalk:left": "yes", "sidewalk:right": "yes"} (if leftRightDistinctions contains 'sidewalk')
     * or:
     * {"cycleway:surface" = "asphalt"} becomes {"cycleway:left:surface"=asphalt} and {"cycleway:right:surface"=asphalt}
     * @param props Json containing all properties
     */
    public static addLeftRightTags(leftRightDistinctions: string[], props: any) {
        const newProps = {...props};
        for (var prop in props) {
            const value = props[prop];
            const splittedKeys = prop.split(":")
            if (leftRightDistinctions.includes(splittedKeys[0])) {
                if (splittedKeys.length >= 2 && splittedKeys[1] in ["left", "right"]) {
                    // Left and right is already specified here, so skip
                    
                } else if (splittedKeys.length >= 2 && splittedKeys[1] === "both") {
                    // Both is specified, so split this in left and right
                    const temp = [...splittedKeys];

                    temp[1] = "left"
                    const leftKey = temp.join(":")

                    temp[1] = "right"
                    const rightKey = temp.join(":")

                    newProps[leftKey] = value;
                    newProps[rightKey] = value;

                } else {
                    // No direction specifier already added, so we can add our own (if left and right isn't specified yet)
                    const leftKey =TagUtils. getSideVersionOfKey(prop, "left")
                    const rightKey =TagUtils.  getSideVersionOfKey(prop, "right")

                    if (!(leftKey in props)) {
                        newProps[leftKey] = value;
                    }

                    if (!(rightKey in props)) {
                        newProps[rightKey] = value;
                    }

                }
            }
        }
        return newProps;
    }

    /**
     * Given two hashes of {key --> values[]}, makes sure that every neededTag is present in availableTags
     */
    static AllKeysAreContained(availableTags: any, neededTags: any) {
        for (const neededKey in neededTags) {
            const availableValues: string[] = availableTags[neededKey]
            if (availableValues === undefined) {
                return false;
            }
            const neededValues: string[] = neededTags[neededKey];
            for (const neededValue of neededValues) {
                if (availableValues.indexOf(neededValue) < 0) {
                    return false;
                }
            }
        }
        return true;
    }

    /***
     * Creates a hash {key --> [values]}, with all the values present in the tagsfilter
     *
     * @param tagsFilters
     * @constructor
     */
    static SplitKeys(tagsFilters: TagsFilter[]) {
        const keyValues = {} // Map string -> string[]
        tagsFilters = [...tagsFilters] // copy all
        while (tagsFilters.length > 0) {
            // Queue
            const tagsFilter = tagsFilters.shift();

            if (tagsFilter === undefined) {
                continue;
            }

            if (tagsFilter instanceof And) {
                tagsFilters.push(...tagsFilter.and);
                continue;
            }

            if (tagsFilter instanceof Tag) {
                if (keyValues[tagsFilter.key] === undefined) {
                    keyValues[tagsFilter.key] = [];
                }
                keyValues[tagsFilter.key].push(...tagsFilter.value.split(";"));
                continue;
            }

            console.error("Invalid type to flatten the multiAnswer", tagsFilter);
            throw "Invalid type to FlattenMultiAnswer"
        }
        return keyValues;
    }

    /**
     * Given multiple tagsfilters which can be used as answer, will take the tags with the same keys together as set.
     * E.g:
     *
     * FlattenMultiAnswer([and: [ "x=a", "y=0;1"], and: ["x=b", "y=2"], and: ["x=", "y=3"]])
     * will result in
     * ["x=a;b", "y=0;1;2;3"]
     *
     * @param tagsFilters
     * @constructor
     */
    static FlattenMultiAnswer(tagsFilters: TagsFilter[]): And {
        if (tagsFilters === undefined) {
            return new And([]);
        }

        let keyValues = TagUtils.SplitKeys(tagsFilters);
        const and: TagsFilter[] = []
        for (const key in keyValues) {
            and.push(new Tag(key, Utils.Dedup(keyValues[key]).join(";")));
        }
        return new And(and);
    }

    static MatchesMultiAnswer(tag: TagsFilter, tags: any): boolean {
        const splitted = TagUtils.SplitKeys([tag]);
        for (const splitKey in splitted) {
            const neededValues = splitted[splitKey];
            if (tags[splitKey] === undefined) {
                return false;
            }

            const actualValue = tags[splitKey].split(";");
            for (const neededValue of neededValues) {
                if (actualValue.indexOf(neededValue) < 0) {
                    return false;
                }
            }
        }
        return true;
    }

    public static SimpleTag(json: string, context?: string): Tag {
        const tag = Utils.SplitFirst(json, "=");
        if (tag.length !== 2) {
            throw `Invalid tag: no (or too much) '=' found (in ${context ?? "unkown context"})`
        }
        return new Tag(tag[0], tag[1]);
    }

    public static Tag(json: AndOrTagConfigJson | string, context: string = ""): TagsFilter {
        try {
            return this.TagUnsafe(json, context);
        } catch (e) {
            console.error("Could not parse tag", json, "in context", context, "due to ", e)
            throw e;
        }
    }

    private static comparators
        : [string, (a: number, b: number) => boolean][]
        = [
        ["<=", (a, b) => a <= b],
        [">=", (a, b) => a >= b],
        ["<", (a, b) => a < b],
        [">", (a, b) => a > b],
    ]

    private static TagUnsafe(json: AndOrTagConfigJson | string, context: string = ""): TagsFilter {

        if (json === undefined) {
            throw `Error while parsing a tag: 'json' is undefined in ${context}. Make sure all the tags are defined and at least one tag is present in a complex expression`
        }
        if (typeof (json) == "string") {
            const tag = json as string;

            for (const [operator, comparator] of TagUtils.comparators) {
                if (tag.indexOf(operator) >= 0) {
                    const split = Utils.SplitFirst(tag, operator);

                    const val = Number(split[1].trim())
                    if (isNaN(val)) {
                        throw `Error: not a valid value for a comparison: ${split[1]}, make sure it is a number and nothing more (at ${context})`
                    }

                    const f = (value: string | undefined) => {
                        const b = Number(value?.replace(/[^\d.]/g, ''))
                        if (isNaN(b)) {
                            return false;
                        }
                        return comparator(b, val)
                    }
                    return new ComparingTag(split[0], f, operator + val)
                }
            }

            if (tag.indexOf("!~") >= 0) {
                const split = Utils.SplitFirst(tag, "!~");
                if (split[1] === "*") {
                    throw `Don't use 'key!~*' - use 'key=' instead (empty string as value (in the tag ${tag} while parsing ${context})`
                }
                return new RegexTag(
                    split[0],
                    new RegExp("^" + split[1] + "$"),
                    true
                );
            }
            if (tag.indexOf("~~") >= 0) {
                const split = Utils.SplitFirst(tag, "~~");
                if (split[1] === "*") {
                    split[1] = "..*"
                }
                return new RegexTag(
                    new RegExp("^" + split[0] + "$"),
                    new RegExp("^" + split[1] + "$")
                );
            }
            if (tag.indexOf(":=") >= 0) {
                const split = Utils.SplitFirst(tag, ":=");
                return new SubstitutingTag(split[0], split[1]);
            }

            if (tag.indexOf("!=") >= 0) {
                const split = Utils.SplitFirst(tag, "!=");
                if (split[1] === "*") {
                    split[1] = "..*"
                }
                return new RegexTag(
                    split[0],
                    new RegExp("^" + split[1] + "$"),
                    true
                );
            }
            if (tag.indexOf("!~") >= 0) {
                const split = Utils.SplitFirst(tag, "!~");
                if (split[1] === "*") {
                    split[1] = "..*"
                }
                return new RegexTag(
                    split[0],
                    new RegExp("^" + split[1] + "$"),
                    true
                );
            }
            if (tag.indexOf("~") >= 0) {
                const split = Utils.SplitFirst(tag, "~");
                if (split[1] === "*") {
                    split[1] = "..*"
                }
                return new RegexTag(
                    split[0],
                    new RegExp("^" + split[1] + "$")
                );
            }
            if (tag.indexOf("=") >= 0) {


                const split = Utils.SplitFirst(tag, "=");
                if (split[1] == "*") {
                    throw `Error while parsing tag '${tag}' in ${context}: detected a wildcard on a normal value. Use a regex pattern instead`
                }
                return new Tag(split[0], split[1])
            }
            throw `Error while parsing tag '${tag}' in ${context}: no key part and value part were found`

        }
        if (json.and !== undefined) {
            return new And(json.and.map(t => TagUtils.Tag(t, context)));
        }
        if (json.or !== undefined) {
            return new Or(json.or.map(t => TagUtils.Tag(t, context)));
        }
        throw `Could not parse the tag ${json} in context ${context}`
    }
}