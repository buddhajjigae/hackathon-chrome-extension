chrome.commands.onCommand.addListener(function (command) {
    console.log("here");
    if (command === "injectContrast") {
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectContrast.js'
        });
    }
    if (command === "injectGray") {
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectGrayScale.js'
        });
    }
    if (command === "injectGroovy") {
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectGroovy.js'
        });
    }
    if (command === "injectShadow") {
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectShadow.js'
        });
    }
});
