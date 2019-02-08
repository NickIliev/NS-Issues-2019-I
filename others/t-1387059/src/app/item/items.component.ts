import { Component, OnInit } from "@angular/core";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    openGoogleMap() {
        // The user device MUST have Google Maps App installed to open the below link in the APP
        // If the app is not instaled the link will be opened in the default browser

        openUrl("https://www.google.com/maps/search/?api=1&query=centurylink+field");
        
        // another example
        // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393&query_place_id=ChIJKxjxuaNqkFQR3CK6O1HNNqY

        // all about Google Schemes here: https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393&query_place_id=ChIJKxjxuaNqkFQR3CK6O1HNNqY
    }
}
