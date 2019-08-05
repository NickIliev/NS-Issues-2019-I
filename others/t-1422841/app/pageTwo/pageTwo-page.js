/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
const frameModule = require("ui/frame");
const PageTwoViewModel = require("./pageTwo-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new PageTwoViewModel();
}
exports.onClick = function () {
    frameModule.topmost().navigate({ moduleName: "pageThree/pageThree-page" });
}
exports.onNavigatingTo = onNavigatingTo;
