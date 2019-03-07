import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

import { Observable, fromEvent } from "rxjs";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    labels: Array<View> = [];

    constructor(private _itemService: ItemService, private _routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    // onLabelLoaded(args, id): void {
    //     let label = args.object as View;
    //     this.labels.push(label);

    //     let tapEvent$ = fromEvent(label, "tap");

    //     tapEvent$.subscribe(() => {
    //         this._routerExtensions.navigate(['item', id]);
    //     });
    // }

    // basic demonstration of using RXJS's fromEvent to attach to the mobile gesture events
    onStackLoaded(args) {
        let stack = args.object as StackLayout;

        let callback = (view: View) => {
            switch (view.typeName) {
                case "Button":
                    let buttonTapEvent$ = fromEvent(view, "tap");

                    buttonTapEvent$.subscribe(() => {
                        this._routerExtensions.navigate(['item', 3]);
                    });
                    break;
                case "Label":
                    let labelTapEvent$ = fromEvent(view, "tap");

                    labelTapEvent$.subscribe(() => {
                        this._routerExtensions.navigate(['item', 1]);
                    });
                    break;
                case "GridLayout":
                    let gridTapEvent$ = fromEvent(view, "tap");

                    gridTapEvent$.subscribe(() => {
                        this._routerExtensions.navigate(['item', 21]);
                    });
                    break;             
                default:
                    break;
            }

            return true;
        }
        stack.eachChild(callback);
    }
}
