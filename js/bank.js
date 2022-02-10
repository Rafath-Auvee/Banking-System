var sum = 0;
var withdrawSum = 0;

var totalBalance = 0;


document.getElementById("deposit-submit").addEventListener("click", function() {

    const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    if (isNaN(depositAmount)) {
        console.log("clicked but empty value");
    } else if (depositAmount > 0) {
        sum = parseFloat(parseFloat(sum) + depositAmount);
        document.getElementById("total-amount").innerText = sum;
    } else {
        document.getElementById("deposit-amount").value = "";
        console.log("Invalid Input");
    }

    document.getElementById("deposit").innerText = sum;

    document.getElementById("deposit-amount").value = "";

});


document.getElementById("withdraw-submit").addEventListener("click", function() {
    const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
    if (isNaN(withdrawAmount)) {
        console.log("Insufficient Balance");
    } else if (sum <= 0) {
        console.log("Insufficient Balance");
    } else if (withdrawAmount >= sum) {
        sum = 0;
        document.getElementById("total-amount").innerText = sum;
    } else {
        withdrawSum = parseFloat(withdrawSum + withdrawAmount);
        sum = sum - parseFloat(withdrawAmount);
        document.getElementById("total-amount").innerText = sum;
    }
    document.getElementById("withdraw").innerText = withdrawSum;
    document.getElementById("withdraw-amount").value = "";
});