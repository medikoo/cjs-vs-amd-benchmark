'use strict';

var http    = require('http')
  , resolve = require('path').resolve
  , connect = require('connect')

  , publicPath = resolve(__dirname, 'public');

module.exports = function (port) {
	var app = connect();
	app.use(connect.static(publicPath));
	app.use(require('./webmake-middleware'));
	http.createServer(app).listen(port);
};
