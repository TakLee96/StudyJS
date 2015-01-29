module.exports = {
	$provider: function (name, callback) {
		this._services[name] = callback;
	},
	$apply: function (func) {
		var func_str = func.toString();
		var left_p = func_str.indexOf('(');
		var right_p = func_str.indexOf(')');
		func_str = func_str.slice(left_p + 1, right_p);
		var service = func_str.trim();
		return func(this._services[service]());
	},
	_services: {}
};
