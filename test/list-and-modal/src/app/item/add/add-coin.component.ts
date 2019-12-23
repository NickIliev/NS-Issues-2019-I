import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";

@Component({
    templateUrl: "./add-coin.component.html",
    styleUrls: ["./add-coin.component.css"]
})
export class AddCoinComponent {
    constructor(private _params: ModalDialogParams, private _page: Page) {
        this._page.on("unloaded", () => {
            this._params.closeCallback("values from unloaded page");
        })
    }

    ngOnDestroy() {
        this._params.closeCallback("ngOnDestroy return value");
    }
    
    onClose(): void {
        this._params.closeCallback("onClose return value");
    }
}