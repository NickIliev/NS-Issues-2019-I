
const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {

    const page = args.object;

    // test console.log with HMR
    console.log("onNavigatingTO page: ", page);

    page.bindingContext = createViewModel();
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;
