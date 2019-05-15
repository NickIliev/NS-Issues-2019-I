let page;
const appDir = __dirname; // absolute path to the folder
console.log(`APP DIR ${appDir}`);

function onNavigatingTo(args) {
    page = args.object;
}
exports.onNavigatingTo = onNavigatingTo;

function createBindingModel(args) {
    const path = `./main-view-model`;
    const createViewModel = require(`./main-view-model`).createViewModel;

    page.bindingContext = createViewModel();
}
exports.createBindingModel = createBindingModel;

function loadInContext(filename) { 
    return new Promise(function(resolve){
        require(['./'+filename], resolve);
    })
}

function loadModules(namesInContext){
    return Promise.all(namesInContext.map(loadInContext));
}