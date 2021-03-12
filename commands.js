chrome.commands.onCommand.addListener(function (command) {
    console.log("here");
    if (command === "injectContrast") {
        console.log("now here");
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectContrast.js'
        });
    }
    if (command === "injectGray") {
        console.log("now here");
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectGrayScale.js'
        });
    }
    if (command === "injectGroovy") {
        console.log("now here");
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectGroovy.js'
        });
    }
    if (command === "injectShadow") {
        console.log("now here");
        chrome.tabs.executeScript(null, {
            //code: document.documentElement.style.filter = "grayscale(100%)"
            file: 'injectShadow.js'
        });
    }

    /*
    if (command == "toggle") {
        chrome.tabs.query({active:true, currentWindow: true}, function(arrayOfTabs) {
            document.documentElement.style.filter = "grayscale(100%)";            
        });
    }*/
    
});