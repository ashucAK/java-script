document.getElementById("mybutton").onclick = function(){
    /*if(document.getElementById("mycheckbox").checked){
        console.log("You are Subscribed")
    }
    else{
        console.log("You are Unsubscribed")

    }
    */
    const mycheckbox = document.getElementById("mycheckbox");
    const visac = document.getElementById("visac");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");
    if(mycheckbox.checked){
        console.log("You are SUB");
    }
    else{
        console.log("You are not SUB");
    }
    if(visac.checked){
        console.log("payment done through visac");
    }
    else if(mastercard.checked){
        console.log("payment done through mastercard");
    }
    else if(paypal.checked){
        console.log("payment done through paypal");
    }
    else{
        console.log("Select a payment method");
    }
}