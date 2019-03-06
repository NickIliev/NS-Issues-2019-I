import { Component, OnInit, ViewContainerRef} from "@angular/core";
import { ModalDialogParams, ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ModalComponent } from "../shared/modal.component";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  constructor(private _vcRef: ViewContainerRef, private _modalService: ModalDialogService) { }

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
