import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { ModalDialogParams, ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ModalComponent } from "../shared/modal.component";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _vcRef: ViewContainerRef, private _modalService: ModalDialogService, private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
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
