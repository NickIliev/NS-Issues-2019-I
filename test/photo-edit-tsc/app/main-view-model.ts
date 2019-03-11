import { Observable } from "tns-core-modules/data/observable";
import { PhotoEditor, PhotoEditorControl } from "nativescript-photo-editor";
import { ImageSource, fromFileOrResource } from "tns-core-modules/image-source";
import { requestPermissions, takePicture } from "nativescript-camera";


export class HelloWorldModel extends Observable {
    photoEditor: PhotoEditor;
    originalImage: ImageSource;
  
    private _imageSrc: ImageSource;

    constructor() {
        super();
        
        this.photoEditor = new PhotoEditor();
        this.imageSrc = fromFileOrResource("res://icon");

        requestPermissions().then(() => {
            console.log("perms granted");
        })
    }

    get imageSrc(): ImageSource {
        return this._imageSrc;
    }

    set imageSrc(value: ImageSource) {
        if (this._imageSrc !== value) {
            this._imageSrc = value;
            this.notifyPropertyChange("imageSrc", value);
        }
    }

    onImageLoaded(args) {
        this.originalImage = fromFileOrResource("res://logo");
        console.log("this.originalImage: ", this.originalImage);
    }

    takePhoto() {
        takePicture()
            .then(newImage => {
                console.log(newImage);
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
            console.log(newImage);
            this.imageSrc = newImage;
        }).catch((e) => {
            console.error(e);
        });
    }
}
