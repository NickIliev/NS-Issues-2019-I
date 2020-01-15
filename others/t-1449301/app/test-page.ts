import { Color } from "@nativescript/core/color";

declare module '@nativescript/core/ui/styling/style' {
    interface Style {
        anchorColor: Color;
    }
}

// Not working with NativeScript 6.3.2
// import { Color } from "tns-core-modules/color";

// declare module 'tns-core-modules/ui/styling/style' {
//     interface Style {
//         anchorColor: Color;
//     }
// }