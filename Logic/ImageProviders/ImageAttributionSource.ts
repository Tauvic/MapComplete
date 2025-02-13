import {UIEventSource} from "../UIEventSource";
import {LicenseInfo} from "./Wikimedia";
import BaseUIElement from "../../UI/BaseUIElement";


export default abstract class ImageAttributionSource {

    private _cache = new Map<string, UIEventSource<LicenseInfo>>()

    GetAttributionFor(url: string): UIEventSource<LicenseInfo> {
        const cached = this._cache.get(url);
        if (cached !== undefined) {
            return cached;
        }
        const src = this.DownloadAttribution(url)
        this._cache.set(url, src)
        return src;
    }


    public abstract SourceIcon(backlinkSource?: string): BaseUIElement;

    /*Converts a value to a URL. Can return null if not applicable*/
    public PrepareUrl(value: string): string {
        return value;
    }

    protected abstract DownloadAttribution(url: string): UIEventSource<LicenseInfo>;

}