
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";

const axios = require('axios');

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    axios({
        method: 'get',
        url: 'http://bit.ly/2mTM3nY',
        responseType: 'stream'
      })
        .then( (response) => {
          console.log(response)
        });
}
