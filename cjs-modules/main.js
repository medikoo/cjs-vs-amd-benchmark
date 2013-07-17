'use strict';

var start, end, p;

require('./0');

end = Number(new Date());
start = window.startTime;

p = document.getElementById('result');
p.innerHTML = "CJS load time " + ((end - start) / 1000).toFixed(3) + "s";
