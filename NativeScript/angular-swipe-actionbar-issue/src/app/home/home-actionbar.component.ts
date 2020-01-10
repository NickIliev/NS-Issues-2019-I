import { Component, Input, OnInit } from "@angular/core";
import { Page } from "@nativescript/core/ui/page";

@Component({
    selector: "home-actionbar",
    templateUrl: "./home-actionbar.html"
})
export class HomeActionbarComponent implements OnInit {

    @Input() color: string;
    @Input() title: string;
    @Input() hidden: boolean;
    cssClass: string;

    constructor(private page: Page) {
    }

    ngOnInit(): void {
        this.cssClass = `actionbar-${this.color}`;
        this.page.actionBarHidden = this.hidden;
    }
}
