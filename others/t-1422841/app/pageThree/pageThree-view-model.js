const observableModule = require("tns-core-modules/data/observable");

function PageThreeViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = PageThreeViewModel;
