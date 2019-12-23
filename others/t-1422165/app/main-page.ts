import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { requestPermissions } from "nativescript-permissions";
const phone = require( "nativescript-phone" );

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

requestPermissions(["android.permission.CALL_PHONE"]).then(() => {
    console.log(`Permissionsgranted!`);
}).catch(err => {
    console.log(`Permissions fdenied - time for plan B!`);
})
}

export function makeCall() {
    phone.dial("212-555-1234",false);
}