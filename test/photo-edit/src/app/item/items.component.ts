import { Component, OnInit, NgZone } from "@angular/core";
import { PhotoEditor, PhotoEditorControl } from "nativescript-photo-editor";
import { ImageSource, fromFileOrResource, fromResource } from "tns-core-modules/image-source";

import { requestPermissions, takePicture } from "nativescript-camera";
import { borderTopRightRadiusProperty } from "tns-core-modules/ui/page/page";

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
        console.log("this.originalImage: ", this.originalImage);
    }

    takePhoto() {
        takePicture().then(newImage => {
            console.log(newImage);
            this.imageSrc = newImage;
        }).catch(e => {
            console.error(e);
        })
    }

    editPhoto() {

            this.photoEditor.editPhoto({
                imageSource: this.originalImage,
                hiddenControls: [
                    PhotoEditorControl.Text,
                    PhotoEditorControl.Crop,
                ],
            }).then((newImage: ImageSource) => {
                this._zone.run(() => {
                    this.imageSrc = newImage;
                })
            }).catch((e) => {
                console.error(e);
            });

    }
}
