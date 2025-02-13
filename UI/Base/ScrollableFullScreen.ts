import {UIElement} from "../UIElement";
import Svg from "../../Svg";
import Combine from "./Combine";
import Ornament from "./Ornament";
import {FixedUiElement} from "./FixedUiElement";
import {UIEventSource} from "../../Logic/UIEventSource";
import Hash from "../../Logic/Web/Hash";
import BaseUIElement from "../BaseUIElement";

/**
 *
 * The scrollableFullScreen is a bit of a peculiar component:
 * - It shows a title and some contents, constructed from the respective functions passed into the constructor
 * - When the element is 'activated', one clone of title+contents is attached to the fullscreen
 * - The element itself will - upon rendering - also show the title and contents (allthough it'll be a different clone)
 *
 *
 */
export default class ScrollableFullScreen extends UIElement {
    private static readonly empty = new FixedUiElement("");
    private static readonly _actor = ScrollableFullScreen.InitActor();
    private static _currentlyOpen: ScrollableFullScreen;
    public isShown: UIEventSource<boolean>;
    private _component: BaseUIElement;
    private _fullscreencomponent: BaseUIElement;
    private _hashToSet: string;

    constructor(title: ((mode: string) => BaseUIElement), content: ((mode: string) => BaseUIElement),
                hashToSet: string,
                isShown: UIEventSource<boolean> = new UIEventSource<boolean>(false)
    ) {
        super();
        this.isShown = isShown;
        this._hashToSet = hashToSet;

        this._component = this.BuildComponent(title("desktop"), content("desktop"), isShown)
            .SetClass("hidden md:block");
        this._fullscreencomponent = this.BuildComponent(title("mobile"), content("mobile"), isShown);
        const self = this;
        isShown.addCallback(isShown => {
            if (isShown) {
                self.Activate();
            } else {
                ScrollableFullScreen.clear();
            }
        })
    }

    private static clear() {
        ScrollableFullScreen.empty.AttachTo("fullscreen")
        const fs = document.getElementById("fullscreen");
        ScrollableFullScreen._currentlyOpen?.isShown?.setData(false);
        fs.classList.add("hidden")
        Hash.hash.setData(undefined);
    }

    private static InitActor() {
        Hash.hash.addCallback(hash => {
            if (hash === undefined || hash === "") {
                ScrollableFullScreen.clear()
            }
        });
        return true;
    }

    InnerRender(): BaseUIElement {
        return this._component;
    }

    Activate(): void {
        this.isShown.setData(true)
        this._fullscreencomponent.AttachTo("fullscreen");
        if (this._hashToSet != undefined) {
            Hash.hash.setData(this._hashToSet)
        }
        const fs = document.getElementById("fullscreen");
        ScrollableFullScreen._currentlyOpen = this;
        fs.classList.remove("hidden")
    }

    private BuildComponent(title: BaseUIElement, content: BaseUIElement, isShown: UIEventSource<boolean>) {
        const returnToTheMap =
            new Combine([
                Svg.back_svg().SetClass("block md:hidden"),
                Svg.close_svg().SetClass("hidden md:block")
            ])
                .onClick(() => {
                    isShown.setData(false)
                }).SetClass("mb-2 bg-blue-50 rounded-full w-12 h-12 p-1.5 flex-shrink-0")

        title.SetClass("block text-l sm:text-xl md:text-2xl w-full font-bold p-2 pl-4 max-h-20vh overflow-y-auto")
        const ornament = new Combine([new Ornament().SetStyle("height:5em;")])
            .SetClass("md:hidden h-5")
        return new Combine([
            new Combine([
                new Combine([returnToTheMap, title])
                    .SetClass("border-b-2 border-black shadow md:shadow-none bg-white p-2 pb-0 md:p-0 flex flex-shrink-0"),
                new Combine([content, ornament])
                    .SetClass("block p-2 md:pt-4 w-full h-full overflow-y-auto md:max-h-65vh"),
                // We add an ornament which takes around 5em. This is in order to make sure the Web UI doesn't hide
            ]).SetClass("flex flex-col h-full relative bg-white")
        ]).SetClass("fixed top-0 left-0 right-0 h-screen w-screen md:max-h-65vh md:w-auto md:relative z-above-controls");

    }

}