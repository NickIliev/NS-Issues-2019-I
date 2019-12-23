import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalRootComponent } from "../item/add/modal-root.component";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    openModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: true
        };

        this._modalService.showModal(ModalRootComponent, options)
            .then((result: string) => { });
    }
}
