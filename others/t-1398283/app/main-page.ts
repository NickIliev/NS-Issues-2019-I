
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { BarcodeScanner } from "nativescript-barcodescanner";
const vm = new HelloWorldModel();

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;

    page.bindingContext = vm;
}

export function scan() {
    const barcodescanner = new BarcodeScanner();

    barcodescanner.scan({
        formats:"PDF_417,CODE_39, QR_CODE, DATA_MATRIX",
        cancelLabel: "Cancel Scan",
        // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
        message: "Scan your referral barcode using the camera",
        // Start with the front cam, if available. Android only, default false
        preferFrontCamera: false,
        // Render a button to switch between front and back cam. Android only, default false (on iOS it's always available)
        showFlipCameraButton: false
    }).then((result) => {
        console.log(result);
        vm.set("result", result.format.toString());

    }).catch(err => {
        console.log(err);
    })
}

