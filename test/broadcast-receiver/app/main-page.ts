
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { isAndroid } from "tns-core-modules/platform";
import * as applicationModule from "tns-core-modules/application";

let receiver;
let vm;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    vm = fromObject({});

    vm.set("info", "Using Android Broadcast Receiver \nto check the battery life");
    vm.set("batteryLife", 0);
    
    page.bindingContext = vm;
}

export function startReceiver() {
    if (isAndroid) {
        receiver = applicationModule.android.registerBroadcastReceiver(
            android.content.Intent.ACTION_BATTERY_CHANGED,
            (context, intent) => {
                const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                const percent = (level / scale) * 100.0;

                console.log(`percent: ${percent}`)
                vm.set("batteryLife", percent);
            });

        console.log(`receiver ${receiver}`); // undefined ?
    }
}

export function stopReceiver() {
    if (isAndroid) {
        // as receiver is undefeind we can't find the broadcast receiver which we want to unregister from
        applicationModule.android.unregisterBroadcastReceiver(receiver);
    }
}