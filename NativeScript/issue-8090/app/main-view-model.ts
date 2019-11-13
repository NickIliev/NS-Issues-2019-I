import { Observable } from "tns-core-modules/data/observable";
import { topmost, getFrameById, NavigationEntry } from "tns-core-modules/ui/frame";

export class HelloWorldModel extends Observable {

    constructor() {
        super();

    }

    onTap() {
        let frame = getFrameById("root-frame");

        let transition = {
            name: "slideLeft",
            curve: "easeIn"
        };
        let params: NavigationEntry = {
            moduleName: "sub-page",
            transition: transition,
        };

        frame.navigate(params);
    }
}
