import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { getJSON } from "tns-core-modules/http";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function getJsonFromLocalhost() {
    let url = "http://10.0.2.2:3000/posts/1";

    getJSON(url).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}