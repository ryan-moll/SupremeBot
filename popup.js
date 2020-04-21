var bgPage = chrome.extension.getBackgroundPage();

var documents = ["order_billing_name", "order_email", "order_tel", "bo", "oba3", "order_billing_zip",
"order_billing_city", "order_billing_state", "order_billing_country", "credit_card_number",
"credit_card_month", "credit_card_year", "card_security_code", "product_code", "size"
];

function updateBoxes() {
    chrome.storage.local.get(null, function(result) {
        for (var i = 0; i < documents.length; i++) {
            id = documents[i];
            if (id in result) {
                document.getElementById(id).value = result[id];
            }
        }
    });
};

document.getElementById("save_button").addEventListener("click", function() {
    chrome.storage.local.set({"order_billing_name": document.getElementById("order_billing_name").value,
                                "order_email": document.getElementById("order_email").value,
                                "order_tel": document.getElementById("order_tel").value,
                                "bo": document.getElementById("bo").value,
                                "oba3": document.getElementById("oba3").value,
                                "order_billing_zip": document.getElementById("order_billing_zip").value,
                                "order_billing_city": document.getElementById("order_billing_city").value,
                                "order_billing_state": document.getElementById("order_billing_state").value,
                                "order_billing_country": document.getElementById("order_billing_country").value,
                                "credit_card_number": document.getElementById("credit_card_number").value,
                                "credit_card_month": document.getElementById("credit_card_month").value,
                                "credit_card_year": document.getElementById("credit_card_year").value,
                                "card_security_code": document.getElementById("card_security_code").value,
                                "product_code": document.getElementById("product_code").value,
                                "size": document.getElementById("size").value}, function(){
                                    chrome.storage.local.get(null, function(result){console.log(result)});
                                    });
    }, false);

document.getElementById("start_button").addEventListener("click", function() {
    console.log("Trying to reload");
    console.log(bgPage.location);
    bgPage.location.reload();
});

window.onload = function () {
    updateBoxes();
};
