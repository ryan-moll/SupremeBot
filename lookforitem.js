chrome.storage.local.get(["product_code"], function(result) {
    var items = document.getElementsByClassName("inner-article");

    var product_code = result.product_code;

     console.log("looking for item");
     for (var i = 0; i < items.length; i++) {
         var item = items[i];
         var image  = item.getElementsByTagName("img")[0];
         var alt = image.alt;
         var link = item.getElementsByTagName("a")[0];
            if (alt == product_code) {
                link.click();
                break;
            }
     }
    setTimeout(function() {location.reload();}, 500);
});
