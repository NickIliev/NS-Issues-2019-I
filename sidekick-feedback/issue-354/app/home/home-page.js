exports.pageLoaded = function (args) {
  var page = args.object;
  var c = "some text";
  var idc = "العربییە"
  console.log(c);
  console.log(idc);
}

function btn(args) {
  const button = args.object;
  const page = button.page;
  var c = "some text";
  var idc = "العربییە"
  console.log(c);
  console.log(idc);
}
exports.btn = btn;

