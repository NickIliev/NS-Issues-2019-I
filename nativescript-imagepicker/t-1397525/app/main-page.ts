import * as imagepicker from "nativescript-imagepicker";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function openPicker() {
    let context = imagepicker.create({mode: "single"});
    context
        .authorize()
        .then(function () {
            return context.present();
        })
        .then(function (selection) {
            console.log("selected image");
        }).catch(function (e) {
            console.log("caught : ", e);
        });
}
