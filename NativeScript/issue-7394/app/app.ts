import * as app from "tns-core-modules/application";
import { fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Frame, getFrameById } from "tns-core-modules/ui/frame";
import { parse } from "tns-core-modules/ui/builder";
import { GC } from "tns-core-modules/utils/utils";

app.run({
    create: () => {
        const mainFrame = new Frame();
        mainFrame.id = "root-frame";

        let pageA, pageB;

        const pageAxml = `<Page loaded="onLoaded"><Button text="to PageB" tap="onButtonATap"/></Page>`;
        function onButtonATap() {
            GC();
            getFrameById("root-frame").navigate(() => pageB);
        }
        function onLoaded() {
            /* 
                if we re-intialize the page the initNativeView will be called
                and the tapHandler will work (it will be re-assigned)
            */
            // pageB = <Page>parse(pageBxml, bobj); 
        }

        const pageBxml = `<Page><Button text="goBack() to PageA" tap="onButtonBTap"/></Page>`;
        function onButtonBTap() {
            getFrameById("root-frame").goBack();
        }


        const aobj = {onButtonATap: onButtonATap, onLoaded: onLoaded};
        const bobj = {onButtonBTap: onButtonBTap};

        pageA = <Page>parse(pageAxml, aobj);
        pageB = <Page>parse(pageBxml, bobj);

        mainFrame.navigate(() => pageA);
        return mainFrame;
    }
});