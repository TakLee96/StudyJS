var Evt = require("./event");

Evt.$on("well", function (evt) {
	console.log("Event " + evt.name + " triggered");
});

Evt.$emit("well");
