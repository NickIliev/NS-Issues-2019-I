import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { LocalVideo, VideoActivity } from "nativescript-twilio-video"; // for testing pupposes 

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    localVideo: LocalVideo;
    videoActivity: VideoActivity;

    constructor(private _page: Page) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.localVideo = this._page.getViewById('local-video');
        this.videoActivity.localVideoView = this.localVideo.localVideoView;
    }
}
