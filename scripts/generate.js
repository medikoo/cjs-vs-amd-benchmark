'use strict';

var deferred  = require('deferred')
  , resolve   = require('path').resolve
  , readFile  = require('fs2/lib/read-file')
  , writeFile = require('fs2/lib/write-file')

  , cjsRoot = resolve(__dirname, '../cjs-modules')
  , cjsTpl = '\'use strict\';\n\n$DEPS$\n'

  , amdRoot = resolve(__dirname, '../public/amd-modules')
  , amdTpl = 'define([$DEPS$], function () '
	+ '{\n\t\'use strict\';\n});\n'

  , generate, cjsStringify, amdStringify;

cjsStringify = function (deps) {
	return deps.map(function (dep) {
		return 'require(\'./' + dep + '\');';
	}).join('\n');
};

amdStringify = function (deps) {
	return deps.map(function (dep) {
		return '\'amd-modules/' + dep + '\'';
	}).join(',');
};

generate = function (path, tpl, stringify, map) {
	return deferred.map(Object.keys(map), function (name) {
		return writeFile(resolve(path, name + '.js'),
			tpl.replace('$DEPS$', stringify(map[name])));
	});
};

module.exports = function (map) {
	return deferred(generate(cjsRoot, cjsTpl, cjsStringify, map),
		generate(amdRoot, amdTpl, amdStringify, map));
};
