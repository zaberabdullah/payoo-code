
document.getElementById("cashout-btn").addEventListener("click", function() {
  // 1. get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if(cashoutNumber.length !== 11){
    alert("invalid number");
    return;
  }
  // 2. get the amount,
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();
  // 4. calculate balance
  const newBalance=currentBalance- Number(cashoutAmount);
  console.log(newBalance);
  if(newBalance < 0){
    alert("invalid amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin")
  if(pin === "1234"){
    alert("Cashout Successful")
    setBalance(newBalance);
  }else{
    alert("invalid pin");
    return;
  }
});



// document.getElementById("cashout-btn").addEventListener("click", function () {
  
//   // 1. get the agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if(cashoutNumber.length !=11){
//     alert("Invalid Agent Number");
//     return;
//   }
  
//   // 2. get the amount,
// const cashoutAmountInput = document.getElementById("cashout-amount");
// const cashoutAmount = cashoutAmountInput.value

//   // 3. get the Current Balance
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;

//   // 4. Calculate new Balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
  
//   if(newBalance < 0){
//     alert("Invalid Amount");
//     return;
//   }
  
//   // 5. Get the pin & verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if(pin === '1234'){
//     // 5-1. true:::>> Show an alert > set Balance
//     alert("cashout successful")
//     console.log("new balance", newBalance);
//     balanceElement.innerText = newBalance;
//   }else{
//     // 5-1. true:::>> Show an error alert > return
//     alert("Invalid pin");
//     return;
//   }
// });
