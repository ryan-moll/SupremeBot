function injectScript(filename) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: filename, runAt: "document_end"});
    });
}

inCheckout = false; // change later

var botActive;
looking = false;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tab.url);
    if(tab.url == "https://www.supremenewyork.com/checkout" && !inCheckout){
        injectScript("checkout.js");
        inCheckout = true;
    } else if (tab.url == "http://www.supremenewyork.com/shop/all" && looking) {
        inCheckout = false;
        chrome.tabs.executeScript(tab.id, {file: "lookforitem.js", runAt: "document_end"});
    } else if (tab.url.includes("www.supremenewyork.com/shop") && tab.url != "http://www.supremenewyork.com/shop/all") {
        looking = false;
        clearInterval(botActive);
        injectScript("addtocart.js");
        inCheckout = false;
    };
});


chrome.commands.onCommand.addListener(function(command) {
    console.log("looking");
    looking = true;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
});
