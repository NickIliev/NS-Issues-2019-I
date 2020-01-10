import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core/ui/page";
import { Frame } from "tns-core-modules/ui/frame";
import { DataService, DataItem } from "../shared/data.service";

declare let UIBarStyle: any;

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService, private page: Page) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onActionBarLoaded() {
        this.page.statusBarStyle = "dark";
    }
}
