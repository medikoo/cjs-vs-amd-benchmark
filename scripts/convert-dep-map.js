'use strict';

var forEach = require('es5-ext/lib/Object/for-each');

module.exports = function (map, programPath) {
	var map2 = {}, index = 0, result = {};

	forEach(map, function (val, key) {
		if (key === programPath) map2[key] = 0;
		else map2[key] = ++index;
	});

	forEach(map, function (val, key) {
		result[map2[key]] = val.map(function (key) {
			if (map2[key] == null) throw new Error("Missing! " + key);
			return map2[key];
		});
	});

	return result;
};
