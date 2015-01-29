module.exports = {
	emit: function (name) {
		if (Evt.events[name]) {
			Evt.events[name]();
		} else {
			throw Error("Event " + name + " not defined!");
		}
	},
	on: function (name, cb) {
		if (Evt.events[name]) {
			throw Error("Duplicate Event: " + name);
		} else {
			Evt.events[name] = cb;
		}
	},
	events: {}
};
