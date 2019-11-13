
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { WebView } from "tns-core-modules/ui/web-view";
import { HelloWorldModel } from "./main-view-model";

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onWebViewLoaded(args: EventData) {
    let wv = args.object as WebView;

    console.log(`wv.nativeView: ${wv.nativeView}`)


}
