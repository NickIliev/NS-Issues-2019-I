
// relative paths working with and without Webpack
// const createViewModel = require("./main-view-model").createViewModel;

// absolute paths for module resolution is working only without Webpack
// crashing with Webpack

const appDir = __dirname; // absolute path to the folder
console.log(`APP DIR ${appDir}`);
const createViewModel = require(`${appDir}/main-view-model`).createViewModel;

function onNavigatingTo(args) {

    const page = args.object;

    page.bindingContext = createViewModel();
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;
