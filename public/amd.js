require(['./amd-modules/start'], function (a) {
	var start, end;

	end = Number(new Date());
	start = window.startTime;

	p = document.getElementById('result');
	p.innerHTML = "AMD load time " + ((end - start) / 1000).toFixed(3) + "s";
});
