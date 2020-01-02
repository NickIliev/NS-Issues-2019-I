import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import * as applicationModule from "tns-core-modules/application";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let appContext = applicationModule.android.context;
    let layout = new (<any>androidx).constraintlayout.widget.ConstraintLayout(appContext);
    console.log(`layout >>>>>>>>>>> ${layout}`);
}
