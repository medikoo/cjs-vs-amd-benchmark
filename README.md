# CJS/AMD load time benchmark
## Compare load times of two module systems.

It's basic benchmark that compares speed of both systems when used in development mode.

__Main point is to prove that server-side generation of a bundle on request is not necessarily slower than loading modules asynchronously from the browser. It's actually opposite and difference can be significant. See the [results](#results) section for numbers.__

AMD modules are loaded with [RequireJS](http://requirejs.org/) and CommonJS modules are bundled on request with [Webmake](https://github.com/medikoo/modules-webmake#modules-webmake).

There's no prebuild step, __in both cases modules are loaded/bundled on request__. In case of AMD, they're loaded asynchronously in a browser. In case of CJS when request occurs they're read from filesystem, bundled and served in one file.

To see fair results (adequate to your development environment) **benchmark needs to be installed and launched locally**.  

_You can also check it working at [medyk.org:3700](http://medyk.org:3700/), but mind it's backed with basic Node.js server setup (not very efficient for AMD), and due to extra latency, results will be worse than when running same on your localhost._


### Installation

Install package:

    $ npm install cjs-vs-amd-benchmark

Generate dummy modules (by default it resembles 400 modules tree from existing real world project)

    $ npm run setup

You can generate custom number of out of provided modules map:  
_See `bin/default-deps-map.json` on how it should be constructed_.

    $ bin/generate --mapPath=path/to/custom/map

Start server (defaults to port 3000)

    $ npm start

If you prefer other port, do:

    $ bin/start --port=8080

Load the benchmark on corresponding port, e.g. [localhost:3000](http://localhost:3000)


### Results

Following load times were measured on 2008 MBP with local setups of Node.js and Nginx server, each number is average of 5 runs.

Node.js server setup was very basic, no clusters involved, so concurrency was limited (hence not great results for AMD).

Nginx was configured with `Cache-Control: no-cache` header, so browser always checks with the server whether new version of module is available.

<table>
    <thead><tr><td></td>
    <th>Node.js v0.10.13<br /><br />Google Chrome</th>
		<th>Node.js v.0.10.13<br />Firefox</th>
		<th>Nginx v1.0.10<br />Google Chrome</th>
		<th>Nginx v1.0.10<br />Firefox</th>
	</tr></thead>
	<tbody>
		<tr>
			<td>CommonJS (via <a href="https://github.com/medikoo/modules-webmake">Webmake</a>)</td>
			<td>299ms</td>
			<td>273ms</td>
			<td>N/A</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>AMD (via <a href="http://requirejs.org/">RequireJS</a>)</td>
			<td>896ms</td>
			<td>548ms</td>
			<td>367ms</td>
			<td>569ms</td>
		</tr>
	</tbody>
</table>
