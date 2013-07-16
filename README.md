# CJS/AMD load time benchmark
## Compare load times of two module systems.

It's basic benchmark that compares speed of both systems when used in development mode.

AMD modules are loaded with [RequireJS](http://requirejs.org/) and CommonJS modules are bundled on request with [Webmake](https://github.com/medikoo/modules-webmake#modules-webmake).

There's no prebuild step, __in both cases modules are loaded on request__. In case of AMD, they're loaded asynchronously in a browser. In case of CJS when request occurs they're read from filesystem, bundled and served in one file.

To see fair results (adequate to your development environment) **benchmark needs to be installed and launched locally**.  
Still, you can also check it working at [medyk.org:3700](http://medyk.org:3700/), but mind that it's not the result you'll get on _localhost_.


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
