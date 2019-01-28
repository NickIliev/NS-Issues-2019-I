import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { isAndroid, isIOS } from "tns-core-modules/platform";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onPickerLoaded(args: EventData) {
    const picker = args.object as ListPicker;
    if (isIOS) {
        let uiPicker = picker.nativeView as UIPickerView;
        // https://stackoverflow.com/a/7185460
        // overwerite the delegate method here to implmenet larger font size
        // uiPicker.delegate = myNewDelegateMethod; // example for delegate imlementation in tns-core-modules https://github.com/NativeScript/NativeScript/blob/master/tns-core-modules/ui/list-picker/list-picker.ios.ts#L99s
    } else if (isAndroid) {
        let androidPicker = picker.nativeView;
        console.log(picker.nativeView);
    }
}
