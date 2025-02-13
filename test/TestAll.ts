import {Utils} from "../Utils";
Utils.runningFromConsole = true;
import TagSpec from "./Tag.spec";
import ImageAttributionSpec from "./ImageAttribution.spec";
import GeoOperationsSpec from "./GeoOperations.spec";
import ImageSearcherSpec from "./ImageSearcher.spec";
import ThemeSpec from "./Theme.spec";
import UtilsSpec from "./Utils.spec";
import OsmConnectionSpec from "./OsmConnection.spec";
import T from "./TestHelper";
import {FixedUiElement} from "../UI/Base/FixedUiElement";
import Combine from "../UI/Base/Combine";
import OsmObjectSpec from "./OsmObject.spec";
import ScriptUtils from "../scripts/ScriptUtils";
import UnitsSpec from "./Units.spec";



export default class TestAll {
    private needsBrowserTests: T[] = [new OsmConnectionSpec()]

    public testAll(): void {
        Utils.runningFromConsole = false
        for (const test of this.needsBrowserTests.concat(allTests)) {
            if (test.failures.length > 0) {
                new Combine([new FixedUiElement("TEST FAILED: " + test.name).SetStyle("background: red"),
                    ...test.failures])
                    .AttachTo("maindiv")
                throw "Some test failed"
            }
        }
    }
}
ScriptUtils.fixUtils()
const allTests = [
    new OsmObjectSpec(),
    new TagSpec(),
    new ImageAttributionSpec(),
    new GeoOperationsSpec(),
    new ImageSearcherSpec(),
    new ThemeSpec(),
    new UtilsSpec(),
    new UnitsSpec()
]


for (const test of allTests) {
    if (test.failures.length > 0) {
        throw "Some test failed: " + test.failures.join(", ")
    }
}