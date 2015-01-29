module.exports = {
	$emit: function (name) {
		var evt = this._events[name];
		if (evt) {
			evt.callback(evt);
		} else {
			throw Error("Event " + name + " not defined!");
		}
	},
	$on: function (name, callback) {
		if (this._events[name]) {
			throw Error("Duplicate Event: " + name);
		} else {
			this._events[name] = {
				name: name,
				time: new Date(),
				callback: callback
			};
		}
	},
	_events: {}
};
