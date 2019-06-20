import { Component } from "@angular/core";
import { init } from "nativescript-plugin-firebase";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    constructor() {
        init().then(() => {
            console.log("firebase initialized <<<<<<<");
        })
    }
}
