
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { knownFolders, File, path } from "tns-core-modules/file-system";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    const documents = knownFolders.currentApp();
    const mypath = path.join(documents.path, "db/my_sqlite_database_db.db");
    const exists = File.exists(mypath);
    console.log(`Does my_sqlite_database_db.db exists: ${exists}`);
}


