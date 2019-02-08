import { EventData, fromObject, Observable } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";
let closeCallback;
let vm;

export function onShownModally(args) {
    const context = args.context;
    console.log(`context ${context}`);
    
    vm = fromObject(context);

    closeCallback = args.closeCallback;
    const view: View = <View>args.object;

    view.bindingContext = vm;
}

export function onLoginButtonTap(args: EventData) {
    const username = vm.get("username");
    const password = vm.get("password");
    closeCallback(username, password);
}