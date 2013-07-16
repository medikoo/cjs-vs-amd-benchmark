# CJS/AMD load time benchmark

## Compare load times of two modules systems.

It's basic benchmark that compares speed of both systems when used in development mode.

AMD modules are loaded with [require.js](http://requirejs.org/) and CommonJS are bundled on demand with [Webmake](https://github.com/medikoo/modules-webmake#modules-webmake)

### Installation

Install package:

    $ npm install cjs-vs-amd-benchmark

Generate dummy modules (by default 270)

    $ npm ru setup

You can generate customise the number with:

    $ bin/generate --count=450

Start server (defaults to 3000

    $ npm start

If you prefer to start on other port do:

    $ bin/start --port=8080

See the benchmark on corresponding port
