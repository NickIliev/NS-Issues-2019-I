const observableModule = require("tns-core-modules/data/observable");

function PageTwoViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = PageTwoViewModel;
