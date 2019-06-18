import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { ad } from "tns-core-modules/utils/utils";

declare let android: any;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;

    const context = ad.getApplicationContext();

    let btn = new MyButton(context);
    page.content = context;
}

class MyButton extends android.widget.Button {
    static constructorCalled: boolean = false;
    // constructor
    constructor(context: any) {
        super();
        MyButton.constructorCalled = true;

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    setEnabled(enabled : boolean): void {
        this.super.setEnabled(enabled);
    }
}

