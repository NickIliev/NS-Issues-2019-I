import { Component, OnInit, NgZone } from "@angular/core";
import { PhotoEditor, PhotoEditorControl } from "nativescript-photo-editor";
import { ImageSource, fromFileOrResource, fromResource } from "tns-core-modules/image-source";

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
        this.originalImage = fromResource("res://logo");
    }

    ngOnInit(): void {
    }

    onImageLoaded(args) {
        this.originalImage = fromFileOrResource("res://logo");
        console.log("this.originalImage: ", this.originalImage);
    }

    editPhoto() {
        this.photoEditor.editPhoto({
            imageSource: this.originalImage,
            hiddenControls: [
                PhotoEditorControl.Text,
                PhotoEditorControl.Crop,
            ],
        }).then((newImage: ImageSource) => {
            this.imageSrc = newImage;
        }).catch((e) => {
            console.error(e);
        });
    }
}
