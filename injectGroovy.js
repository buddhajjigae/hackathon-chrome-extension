(function() {
    document.documentElement.style.filter = "hue-rotate(90deg)";
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected hue-rotate!';

	document.body.appendChild(div);
	alert('Groovyness Enabled');
})();