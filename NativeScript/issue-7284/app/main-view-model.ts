import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {

    private _message: string;
    res: any;

    constructor() {
        super();

        // this.res = android.R;
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
