'use strict';

var count   = require('es5-ext/lib/Object/count')
  , resolve = require('path').resolve
  , webmake = require('webmake')
  , encode  = require('ent').encode

  , stringify = JSON.stringify
  , path = resolve(__dirname, 'cjs-modules/main.js')

module.exports = function (req, res, next) {
	var promise;

	if (req.url !== '/cjs.js') {
		next();
		return;
	}

	res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
	// Do not cache generated bundle
	res.setHeader('Cache-Control', 'no-cache');

	promise = webmake(path, { cache: true });
	promise.done(function (content) {
		// Send script
		res.end(content);
		console.log(req.url + " Webmake OK [" + promise.parser.modulesFiles.length +
			" modules from " + count(promise.parser.packages) + " packages in " +
			(promise.time / 1000).toFixed(3) + "s]");
	}, function (err) {
		console.error("Webmake error: " + err.stack);

		// Expose eventual error loudly in the browser
		res.end('document.write(\'<div style="font-size: 1.6em; padding: 1em;' +
			' text-align: left; font-weight: bold; color: red;' +
			' position: absolute; top: 1em; left: 10%; width: 80%;' +
			' background: white; background: rgba(255,255,255,0.9);' +
			' border: 1px solid #ccc;"><div>Could not generate ' + webmake.url +
			'</div><div style="font-size: 0.8em; padding-top: 1em">' +
			stringify(encode(err.message)).slice(1, -1).replace(/'/g, '\\\'') +
			'</div></div>\');');
	});
};
