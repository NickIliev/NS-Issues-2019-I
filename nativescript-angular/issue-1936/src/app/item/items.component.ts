import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { SnackBar, SnackBarOptions } from "nativescript-snackbar";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    snackbar: SnackBar;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) {
        this.snackbar = new SnackBar();
     }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    ngAfterViewInit() {
        this.snackbar.simple('Snackbar', 'red', '#fff', 3, false).then((args) => {
            console.log('jsonResult', JSON.stringify(args));
      })
    }
}
