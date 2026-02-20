document.getElementById("add-money-btn")
.addEventListener("click", function(){
    // 1. get bank account
    const bankAccount=getValueFromInput("add-money-bank");
    // console.log(bankAccount)
    if (bankAccount == "Select a Bank") {
        alert("please select a bank");
        return;
    }
    // step-2 get bank acc no
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11) {
        alert("invalid acc no");
        return;
    }
    // 3. get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount);
    
    const pin = getValueFromInput("add-money-pin")
    if(pin == '1234'){
        alert(`Add Money Success from 
            ${bankAccount} at 
            ${new Date()}`)
        setBalance(newBalance);
    }else{
        alert("invalid pin");
        return;
    }
});