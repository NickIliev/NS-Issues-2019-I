import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {
    items: Array<string>;

    constructor() {
        super();

        this.items = ["One", "Two", "Three", "Four", "Fibe"];
    }

}
