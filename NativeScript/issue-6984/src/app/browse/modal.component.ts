import { Component } from "@angular/core";
import { View, ShownModallyData } from "tns-core-modules/ui/core/view"

@Component({
    moduleId: module.id,
    selector: "modal-page",
    templateUrl: "./modal.component.html"
})
export class ModalComponent {
    constructor( ) {
    }

    close(layoutRoot: View) {
        layoutRoot.closeModal();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        console.log("ModalContent.ngOnDestroy");
    }

    onShowingModally(args: ShownModallyData) {
        console.log("modal-page showingModally");
    }
}