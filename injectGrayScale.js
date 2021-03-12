(function() {
    document.documentElement.style.filter = "grayscale(100%)";
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected grayscale!';

	document.body.appendChild(div);
	alert('Grayscale Enabled');
})();