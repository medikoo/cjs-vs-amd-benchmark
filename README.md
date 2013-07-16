# CJS/AMD load time benchmark

Can be seen live at [medyk.org:3700](http://medyk.org:3700/)

## Compare load times of two module systems.

It's basic benchmark that compares speed of both systems when used in development mode.

AMD modules are loaded with [require.js](http://requirejs.org/) and CommonJS are bundled on request with [Webmake](https://github.com/medikoo/modules-webmake#modules-webmake)

### Installation

Install package:

    $ npm install cjs-vs-amd-benchmark

Generate dummy modules (by default 270)

    $ npm ru setup

You can generate custom number of modules with:

    $ bin/generate --count=450

Start server (defaults to port 3000)

    $ npm start

If you prefer other port, do:

    $ bin/start --port=8080

Load the benchmark on corresponding port, e.g. [localhost:3000](http://localhost:3000)
