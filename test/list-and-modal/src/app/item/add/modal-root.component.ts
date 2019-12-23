import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "./modal-root.component.html"
})
export class ModalRootComponent implements OnInit {
    constructor(
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {

        this._routerExtensions.navigate(["add-item"], { relativeTo: this._activeRoute });

        // this._routerExtensions.navigate([{ outlets: { modaloutlet: ["add-item"] } }], { relativeTo: this._activeRoute });

    }
}