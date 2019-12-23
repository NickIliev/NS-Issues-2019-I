import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { AddCoinComponent } from "./item/add/add-coin.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", loadChildren: "./item/items.module#ItemsModule" },

    // { 
    //     path: "items", component: ItemsComponent
    // },
    // { 
    //     path: "item/:id", 
    //     component: ItemDetailComponent,
    //     children: [
    //         {
    //             path: "add-item", component: AddCoinComponent
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: false })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
