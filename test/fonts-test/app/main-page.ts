
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();


    let fontFamily = "Font Awesome 5 Free";
    let size = 18;

    let fontNamesForFamilyName = UIFont.fontNamesForFamilyName(fontFamily); // NSArray<String>

    for (let index = 0; index < fontNamesForFamilyName.count; index++) {
        const uifont = UIFont.fontWithNameSize(fontNamesForFamilyName.objectAtIndex(index), size);
        console.log(`UIFont ${uifont}`);
    }
}
