let confirmBtn = document.getElementsByClassName("confirm")[0];
let reasulElement = document.getElementsByClassName("result")[0];
let amountElement = document.getElementById("loanAmount");

let amountValueInt ;

confirmBtn.addEventListener("click",calculateInterest);
//amountElement.addEventListener("focusout",makeItLocal);
//amountElement.addEventListener("focusin",clearTemplate);


function calculateInterest(){

    const percentage = document.getElementById("interest").value;
    const year = document.getElementById("duration").value;

    const monthlyPaymentElement = document.getElementById("monthlyPayment");
    const totoalRapidElement = document.getElementById("totoalRapid");
    const InterestPercentageElement = document.getElementById("InterestPercentage");

    reasulElement.style.display = "none";

    //do it for entering month *******************************************

    makeItLocal();

    if(amountValueInt == 0 || percentage == "" || year == ""){
        alert("please fill out fields with proper value!")
        return;
    }

    document.getElementById("loader-container").style.display = "flex";
    setTimeout(showResualt, 700);

    let totalInterestPercentageValue = 0;
    let totoalRapidValue = 0;
    let monthlyPayValue = 0;
    let monthlyInterestRate = percentage / (12 * 100);
    let totalMonth = year * 12;

    let numerator = amountValueInt * monthlyInterestRate * Math.pow((1 + monthlyInterestRate ), totalMonth );
    let denominator = Math.pow((1 + monthlyInterestRate), totalMonth) - 1 ;

    monthlyPayValue = numerator / denominator;
    totoalRapidValue = monthlyPayValue * totalMonth;
    totalInterestPercentageValue = ((totoalRapidValue - amountValueInt) / totoalRapidValue) * 100;


    InterestPercentageElement.value = totalInterestPercentageValue.toFixed(2).toString();
    totoalRapidElement.value = totoalRapidValue.toFixed(2).toString();
    monthlyPaymentElement.value = monthlyPayValue.toFixed(2).toString();

} 

function makeItLocal(){
    amountElement = document.getElementById("loanAmount");
    amountValueInt = Number(amountElement.value);


    if(isNaN(amountValueInt) && amountValueInt != 0){
        amountElement.value = '';
        amountValueInt = '';
    }

    //***********orginal
    /* 
    amountElement = document.getElementById("loanAmount");
    amountValueInt = Number(amountElement.value);


    if(!isNaN(amountValueInt) && amountValueInt != 0){
        amountElement.value = amountValueInt.toLocaleString();
    }
    else{
        amountElement.value = '';
        amountValueInt = '';
    }
    */
}

function clearTemplate(){
    amountValueInt = '';

    amountElement = document.getElementById("loanAmount");

    amountElement.value = '';
}


function showResualt() {
    document.getElementById("loader-container").style.display = "none";
    reasulElement.style.display = "inline";
  }