import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { startMonitoring } from "tns-core-modules/connectivity";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    startMonitoring((args) => {
        console.log(`connectivity type: ${args}`);
    });
}
