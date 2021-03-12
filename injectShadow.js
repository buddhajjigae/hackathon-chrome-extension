(function() {
    if (document.documentElement.style.filter === "none") { //|| document.documentElement.style.filter != "grayscale(100%)" || document.documentElement.style.filter != "contrast(200%)" || document.documentElement.style.filter != "hue-rotate(90deg)") {
        document.documentElement.style.filter = "drop-shadow(16px 16px 20px red) invert(95%)";
        var div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = 0;
        div.style.right = 0;
        div.textContent = 'Injected drop-shadow';
    
        document.body.appendChild(div);
        alert('Drop Shadow Applied');
    } else {
        document.documentElement.style.filter = "none";
        alert('Drop Shadow Removed');
    }
})();
