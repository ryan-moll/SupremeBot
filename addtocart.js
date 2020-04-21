chrome.storage.local.get(["size", "product_code"], function(result) {
    var elements = document.getElementsByClassName("button");
    var selection = document.getElementById("s");
    if (selection == undefined) {
        var scrolls = selection.options;
        var size = result.size;
        // Changes to right size
        for (var i = 0; i < scrolls.length; i++) {
            var scroll = scrolls[i];
            if (scroll.text.includes(size)) {
                selection.value = String(scroll.value);
                break;
            }
        }
    }

    // Clicks add to cart
    for (var i = 0; i < elements.length; i++) {
         if (elements[i].getAttribute("value") == "add to cart") {
              elements[i].click();
              break;
         }
    }

    // To check out
    setTimeout(function() {
         window.location = "https://www.supremenewyork.com/checkout";
    }, 500);
});
