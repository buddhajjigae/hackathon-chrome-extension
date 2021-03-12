(function() {
    if (document.documentElement.style.filter != "contrast(200%)") {
        document.documentElement.style.filter = "contrast(200%)";
        var div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = 0;
        div.style.right = 0;
        div.textContent = 'Injected high contrast';
    
        document.body.appendChild(div);
        alert('High Contrast Applied');
    } else {
        document.documentElement.style.filter = "none";
        alert('High Contrast Removed');
    }
})();
