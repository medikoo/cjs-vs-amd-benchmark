'use strict';

var deferred  = require('deferred')
  , resolve   = require('path').resolve
  , readFile  = require('fs2/lib/read-file')
  , writeFile = require('fs2/lib/write-file')

  , cjsRoot = resolve(__dirname, '../cjs-modules')
  , cjsTpl = '\'use strict\'\n\nrequire(\'./$PATH$\');\n'

  , amdRoot = resolve(__dirname, '../public/amd-modules')
  , amdTpl = 'define([\'amd-modules/$PATH$\'], function (a) '
	+ '{\n\t\'use strict\';\n});\n'


  , generate, updatePublicCount;

generate = function (total, tpl, root) {
	var count = 2, current = 'start';

	return (function self() {
		var nu, last;
		if (!(count < total)) return;
		nu = String(count++);
		last = (!(count < total));
		return writeFile(resolve(root, current + '.js'),
			last ? '' : tpl.replace('$PATH$', nu))(function () {
				current = nu;
				return self(tpl);
			});
	}());
};

updatePublicCount = function (name, total) {
	var filename = resolve(__dirname, '../public/' + name + '.html');

	return readFile(filename)(function (content) {
		content = String(content).replace(/"count">\d+/, '"count">' + total);
		return writeFile(filename, content);
	});
};

module.exports = function (total) {
	return deferred(generate(total, cjsTpl, cjsRoot),
		generate(total, amdTpl, amdRoot), updatePublicCount('amd', total),
		updatePublicCount('cjs', total));
};
