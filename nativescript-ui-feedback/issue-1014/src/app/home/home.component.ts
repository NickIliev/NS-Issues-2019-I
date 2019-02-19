import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<any> = [];

    constructor() {
        // Use the component constructor to inject providers.

        this.items = [1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34, 1, 2, 3, 5, 8, 13, 21, 34,]
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
