import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { registerElement } from "nativescript-angular/";
registerElement("BottomNavigation", () => require("tns-core-modules/ui/bottom-navigation").BottomNavigation);
registerElement("TabStrip", () => require("tns-core-modules/ui/tab-navigation-base/tab-strip").TabStrip);
registerElement("TabStripItem", () => require("tns-core-modules/ui/tab-navigation-base/tab-strip-item").TabStripItem);
registerElement("TabContentItem", () => require("tns-core-modules/ui/tab-navigation-base/tab-content-item").TabContentItem);
registerElement("Tabs", () => require("tns-core-modules/ui/tabs").Tabs);


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
