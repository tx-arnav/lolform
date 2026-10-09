const paymentMethods = document.getElementById("payment-methods");
const cardDetails = document.getElementById("card-details");
const paypalDetails = document.getElementById("paypal-details");
const bankDetails = document.getElementById("bank-details");
//checked value of the radio button
paymentMethods.addEventListener("change"), function(){
    if(paymentMethods.value === "card"){
        cardDetails.style.display = "block";
        paypalDetails.style.display = "none";
        bankDetails.style.display = "none";
    }
    else if(paymentMethods.value === "paypal"){
        cardDetails.style.display = "none";
        paypalDetails.style.display = "block";
        bankDetails.style.display = "none";
    }
    else if(paymentMethods.value === "bank"){
        cardDetails.style.display = "none";
        paypalDetails.style.display = "none";
        bankDetails.style.display = "block";
    }
}