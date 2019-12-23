import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";
import { AddCoinComponent } from "./add/add-coin.component"

const routes: Routes = [
    { path: "", component: ItemsComponent },
    { 
        path: "item/:id", 
        component: ItemDetailComponent,
        children: [
            {
                path: "add-item", component: AddCoinComponent
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ItemsRoutingModule { }
