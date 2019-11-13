import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import * as fs from "tns-core-modules/file-system";
const SETTINGS = require("./settings.json");

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function getTextFromFile() {
    const documents = fs.knownFolders.currentApp();
    console.log(`documents.path: ${documents.path}`); // OK

    const file = documents.getFile('settings.json');
    console.log(`file: ${file.name}`); // OK

    const content = file.readTextSync();
    console.log(`content (sync): ${content}`); // Not working

    file.readText().then(con => {
        console.log(`content (async): ${con}`); // Not working
    })

    console.log(`SETTINGS (imported): ${JSON.stringify(SETTINGS)}`)
}