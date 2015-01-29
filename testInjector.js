var $injector = require("./injector");

$injector.$provider("someProvider", function () {
	this.hello = function () {
		console.log("Hello World!");
	};
	return this;
});

$injector.$apply(function (someProvider) {
	someProvider.hello();
});
