(function() {
    document.documentElement.style.filter = "drop-shadow(16px 16px 20px red) invert(75%)";
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected drop-shadow!';

	document.body.appendChild(div);
	alert('Groovyness Enabled');
})();