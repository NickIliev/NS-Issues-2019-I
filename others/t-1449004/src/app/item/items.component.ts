import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { CalendarModalComponent } from "../modal/calendar.component";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
  selectedDateResult: string;

  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef) {

  }

  ngOnInit(): void {
    this.selectedDateResult = new Date(2020, 0, 26, 12).toLocaleDateString(); // test initial date
  }

  openModal() {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      fullscreen: true,
      context: {
        selectedDateResult: this.selectedDateResult
      }
    };

    this._modalService.showModal(CalendarModalComponent, options)
      .then((result: string) => {
        console.log(`>>>>>>>> Result date from closed modal is: ${result}`);

        this.selectedDateResult = result; // setting the new value of the selectedDate locale string
      });
  }

}
