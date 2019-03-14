import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    const viewModel = new Observable();

    let glyphs = new Array<Observable>();
    let charCode = 0xe903;
    for(; charCode <= 0xeaea; charCode++){
        let glyph = new Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
    }
    viewModel.set("glyphs", glyphs)

    page.bindingContext = viewModel;
}