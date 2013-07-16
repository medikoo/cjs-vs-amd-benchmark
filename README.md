# CJS/AMD load time benchmark

To see **fair results** (adequate to your development environment) benchmark needs to be **installed and launched locally**.

Still, you can also check it working at [medyk.org:3700](http://medyk.org:3700/), but mind that won't show results for _localhost_, _(on localhost, AMD version is usually loaded in about 1.5s)._

## Compare load times of two module systems.

It's basic benchmark that compares speed of both systems when used in development mode.

AMD modules are loaded with [RequireJS](http://requirejs.org/) and CommonJS modules are bundled on request with [Webmake](https://github.com/medikoo/modules-webmake#modules-webmake)

### Installation

Install package:

    $ npm install cjs-vs-amd-benchmark

Generate dummy modules (by default 240)

    $ npm run setup

You can generate custom number of modules with:

    $ bin/generate --count=450

Start server (defaults to port 3000)

    $ npm start

If you prefer other port, do:

    $ bin/start --port=8080

Load the benchmark on corresponding port, e.g. [localhost:3000](http://localhost:3000)
