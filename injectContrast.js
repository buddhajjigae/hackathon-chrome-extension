(function() {
    document.documentElement.style.filter = "contrast(200%)";
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected contrast!';
	
	document.body.appendChild(div);
	alert('High Contrast Enabled');
})();