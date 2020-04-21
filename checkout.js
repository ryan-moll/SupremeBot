chrome.storage.local.get(null, function(result) {

    document.getElementById("order_billing_name").value = String(result.order_billing_name);
    document.getElementById("order_email").value = String(result.order_email);
    document.getElementById("order_tel").value = String(result.order_tel);
    document.getElementById("bo").value = String(result.bo);
    document.getElementById("oba3").value = String(result.oba3);
    document.getElementById("order_billing_zip").value = String(result.order_billing_zip);
    document.getElementById("order_billing_city").value = String(result.order_billing_city);
    changeSelect("order_billing_state", String(result.order_billing_state));
    changeSelect("order_billing_country", String(result.order_billing_country));

    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++){
         if(inputs[i].getAttribute("name").includes("credit_card") && inputs[i].getAttribute("maxlength") != 4){
              inputs[i].value = String(result.credit_card_number);
              break;
         }
    }


    changeSelect("credit_card_month", String(result.credit_card_month));
    changeSelect("credit_card_year", String(result.credit_card_year));

    for(var i = 0; i < inputs.length; i++){
         if(inputs[i].getAttribute("name").includes("credit_card") && inputs[i].getAttribute("maxlength") == 4){
              inputs[i].value = String(result.card_security_code);
         }
    }
    document.getElementById("order_terms").checked = true;
    document.getElementById("order_terms").parentElement.className = "icheckbox_minimal checked";


    var elements = document.getElementsByClassName("button");
    for(var i = 0; i < elements.length; i++){
         if(elements[i].getAttribute("value") == "process payment"){
              elements[i].click();
         }
    }

    function changeSelect(id, value){
         var select = document.getElementById(id);
         var opts = select.options;
         for (var opt, j = 0; opt = opts[j]; j++) {
              if (opt.value == value) {
                   select.selectedIndex = j;
                   break;
              }
         }
    }
});
    
