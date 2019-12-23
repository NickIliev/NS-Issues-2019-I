import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemsRoutingModule } from "./items-routing.module";
import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";
import { AddCoinComponent } from "./add/add-coin.component";
import { ModalRootComponent } from "./add/modal-root.component";


@NgModule({
    imports: [
        ItemsRoutingModule,
        NativeScriptCommonModule
    ],
    declarations: [
        AddCoinComponent,
        ItemsComponent,
        ItemDetailComponent,
        ModalRootComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [AddCoinComponent, ModalRootComponent]
})
export class ItemsModule { }
