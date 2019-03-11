import { Component, OnInit, NgZone } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";

import { Observable, fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private _itemService: ItemService, 
                private _routerExtensions: RouterExtensions,
                private _zone: NgZone) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onGridLoaded(args) {
        let grid = args.object;
        let touchEvent$ = fromEvent(grid, "touch");

        touchEvent$.pipe(
            pluck("action")
        ).subscribe((value) => {
            console.log(value)
        }, (err) => {
            console.log(err)
        }, () => {
            console.log("complete")
        })
    }

    onLabelLoaded(args, id): void {
        let label = args.object as View;

        let tapEvent$ = fromEvent(label, "tap");
        tapEvent$.subscribe((value) => {
            this._zone.run(() => {
                this._routerExtensions.navigate(['item', id]);
            });
        },(err) => { 
            console.log(`ERROR: ${err}`);
        },() => {
            console.log("complete");
        });
    }

    // basic demonstration of using RXJS's fromEvent to attach to the mobile gesture events
    // onStackLoaded(args) {
    //     let stack = args.object as StackLayout;

    //     let callback = (view: View) => {
    //         switch (view.typeName) {
    //             case "Button":
    //                 let buttonTapEvent$ = fromEvent(view, "tap");

    //                 buttonTapEvent$.subscribe(() => {
    //                     this._routerExtensions.navigate(['item', 3]);
    //                 });
    //                 break;
    //             case "Label":
    //                 let labelTapEvent$ = fromEvent(view, "tap");

    //                 labelTapEvent$.subscribe(() => {
    //                     this._routerExtensions.navigate(['item', 1]);
    //                 });
    //                 break;
    //             case "GridLayout":
    //                 let gridTapEvent$ = fromEvent(view, "tap");

    //                 gridTapEvent$.subscribe(() => {
    //                     this._routerExtensions.navigate(['item', 21]);
    //                 });
    //                 break;             
    //             default:
    //                 break;
    //         }

    //         return true;
    //     }
    //     stack.eachChild(callback);
    // }
}
