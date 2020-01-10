import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent {
    @ViewChild("grid", { static: false }) grid: ElementRef;
    nativescriptGrid: GridLayout;

    constructor() { }

    ngAfterViewInit(): void {
        this.nativescriptGrid = this.grid.nativeElement as GridLayout;

        this.nativescriptGrid.on("myCustomEvent", this.myCallback);

        this.nativescriptGrid.notify({
            eventName: "myCustomEvent",
            object: this.nativescriptGrid
        })
    }

    myCallback() {
        console.log(">>>>>> ALERT Triggered!");
    }
}
