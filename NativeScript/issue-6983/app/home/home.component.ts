import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public activeElement: any | null = null;
    public elements: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor() {
    }

    ngOnInit(): void {
    }

    onTap(element) {
        console.log("onTap");
        
        this.activeElement = element;
    }
}
