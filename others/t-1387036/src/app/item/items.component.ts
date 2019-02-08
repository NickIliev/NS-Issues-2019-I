import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Image } from "tns-core-modules/ui/image";
import { Label } from "tns-core-modules/ui/label";
import * as screenshotModule from "nativescript-screenshot";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    stack: StackLayout;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onStackLoaded(args: EventData) {
        this.stack = args.object as StackLayout;
    }

    onMakeScreenshot() {
        let image = new Image();

        // You can pass any view to getImage so pass your MapView here instead of this.stack
        image.imageSource = screenshotModule.getImage(this.stack); 

        let label = new Label();
        label.text = "new screenshot created";

        this.stack.addChild(label);
        this.stack.addChild(image); // for test (adding screenshot as image)
    }
}
