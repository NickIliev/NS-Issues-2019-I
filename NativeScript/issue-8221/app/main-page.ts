
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { TextField } from "tns-core-modules/ui/text-field";
import { HelloWorldModel } from "./main-view-model";

declare let android: any;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    const page = args.object as Page;
    page.bindingContext = new HelloWorldModel();
}

export function onTextFieldLoaded(args: EventData) {
    const tf = args.object as TextField;
    // tf.android.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_FLAG_AUTO_CORRECT); 
}
