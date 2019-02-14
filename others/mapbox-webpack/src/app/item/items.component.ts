import { Component, OnInit } from "@angular/core";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    map: any;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor() { }

    ngOnInit(): void { }

    onMapReady(args) {
        this.map = args.map;
        console.log("onMapReady: ", this.map);
        this.map.addMarkers([
            {
                id: 1,
                lat: 42.624189,
                lng: 23.372106,
                title: 'DevReach 2017',
                icon: 'res://icon',
                subtitle: 'Such an awesome little conference',
                onTap: () => {
                    console.log("DevReach 2017 was tapped");
                },
                onCalloutTap: () => {
                    console.log("DevReach 2017 callout tapped");
                }
            },
            {
                id: 2,
                lat: 51.9280572,
                lng: 16.786096,
                icon: 'res://icon',
            },
            {
                id: 3,
                lat: 51.9280572,
                lng: 4.4201952,
                icon: 'res://icon',
            },]);
    }
}
