
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { Vibrate } from "nativescript-vibrate";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function craeteVib() {
    let vb = new Vibrate();
    let isVibrationAvailable: boolean = vb.hasVibrator();
}