import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogParams, ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ModalComponent } from "../shared/modal.component";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor(private _vcRef: ViewContainerRef, private _modalService: ModalDialogService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    onTap(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: false
        };
    
        this._modalService.showModal(ModalComponent, options)
            .then((result: string) => {
                console.log(result);
            });
    }
}
