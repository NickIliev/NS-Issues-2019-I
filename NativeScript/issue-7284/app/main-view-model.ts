import { Observable } from "tns-core-modules/data/observable";

declare let android: any;
declare let com: any;

import * as application from "tns-core-modules/application";

export class HelloWorldModel extends Observable {

    private _message: string;
    res: any;
    sneaker: any;

    constructor() {
        super();

        let activity = application.android.currentContext;

        // this.res = android.R;
        com.irozon.sneaker.Sneaker.with(activity) // Activity, Fragment or ViewGroup
        .setTitle("Success!!")
        .setMessage("This is the success message")
        .sneakSuccess()
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    onTap() {
        this.updateMessage();
    }

    private updateMessage() {
        console.log(android.R.color.holo_blue_bright.toString());
        this.message = android.R.color.holo_blue_bright.toString();

        // or
        // this.message = this.res.color.holo_blue_bright;
    }
        
}
