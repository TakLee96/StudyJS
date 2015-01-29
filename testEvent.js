var Evt = require("./event");

Evt.on("well", function () {
	console.log("Event well triggered");
});

Evt.emit("well");
