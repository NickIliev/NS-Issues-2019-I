import Vue from "nativescript-vue";

import Home from "./components/Home";

import RadListView from "nativescript-ui-listview/vue";

Vue.use(RadListView);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
