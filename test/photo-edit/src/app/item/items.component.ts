import { Component, OnInit, NgZone } from "@angular/core";
import { PhotoEditor, PhotoEditorControl } from "nativescript-photo-editor";
import { ImageSource, fromFileOrResource } from "tns-core-modules/image-source";

import { requestPermissions, takePicture } from "nativescript-camera";

import * as application from "tns-core-modules/application";
declare let android: any;
declare let com: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    photoEditor: PhotoEditor;
    originalImage: ImageSource;
    imageSrc: any = fromFileOrResource("res://icon");

    constructor(private _zone: NgZone) {
        this.photoEditor = new PhotoEditor();
        this.originalImage = fromFileOrResource("res://logo");
    }

    ngOnInit(): void {
        requestPermissions().then(() => {
            console.log("perms granted");
        })
    }

    onImageLoaded(args) {
        // this.originalImage = fromFileOrResource("res://logo");
        // console.log("this.originalImage: ", this.originalImage);
    }

    takePhoto() {
        takePicture()
            .then(newImage => {
                console.log(newImage);
                this.imageSrc = newImage;
            }).catch(e => {
                console.error(e);
            })
    }
A
            // this.imageSrc = newImage;
        }).catch((e) => {
            console.error(e);
        });
    }
}
