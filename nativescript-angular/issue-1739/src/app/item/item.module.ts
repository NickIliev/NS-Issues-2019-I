import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemService } from "./item.service";
import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";
import { DetailComponent } from "./details.component";

const routes: Routes = [
    { path: "", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "detail/:id", component: DetailComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        ItemsComponent,
        ItemDetailComponent,
        DetailComponent
    ],
    providers: [ItemService]
})
export class ItemModule {
    constructor() { }
}