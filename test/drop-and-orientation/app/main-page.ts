var orientation =  require("nativescript-orientation"); // Comment this line to prevent the crash
// note that due to differences in how require works (compared to import/from) the issue will happen more oftenly in pure JS project when ther is only require as option

import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;

    let vm = fromObject({
        items: ["AAA", "bbbb", "CCCCC"],
        selectedIndex: 1
    })

    page.bindingContext = vm;
}
