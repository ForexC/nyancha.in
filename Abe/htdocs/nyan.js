window.requestAnimFrame = (function(){
	return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function(callback ){
			window.setTimeout(callback, 1000 / 60);
			};
})();

var nyans = 0;

var createNyan = function () {
	var left = -100;
	var top = Math.random() * 100;
	var curr = nyans;

	var nyan = document.createElement('div');
	nyan.setAttribute('class', 'nyan');
	nyan.setAttribute('id', 'nyan' + curr);
	nyan.setAttribute('style', 'left: ' + left + 'px; top: ' + top + '%');
	nyan.innerHTML = '<img src="/static/nyan.gif" height="50" width="100" alt="">';
	document.getElementById('nyans').appendChild(nyan);

	var update = (function () {
		left += 2;
		nyan.style.left = left + 'px';

		if (left === window.innerWidth) {
			nyan.remove();
			setTimeout(createNyan, 5000 + Math.random() * 5000);
		} else {
			requestAnimFrame(update);
		}
	});
	requestAnimFrame(update);

	nyans++;
};

setTimeout(createNyan, Math.random() * 10000);