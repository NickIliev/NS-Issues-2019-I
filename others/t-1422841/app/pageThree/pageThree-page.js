/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
const frameModule = require("ui/frame");
const PageThreeViewModel = require("./pageThree-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new PageThreeViewModel();
}
exports.onClose = function () {
    // frameModule.topmost().navigate({ moduleName: "pageTwo/pageTwo-page", backstackVisible: false });

    frameModule.topmost().goBack();
}
exports.onNavigatingTo = onNavigatingTo;
