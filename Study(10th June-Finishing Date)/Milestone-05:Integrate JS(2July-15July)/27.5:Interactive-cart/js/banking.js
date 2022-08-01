//get id
function id(id){
    let getId = document.getElementById(id);
    return getId;
}
//get id value
function idValue(fieldId, htmlId){
    if(fieldId){
       let fieldValue = parseFloat(fieldId.value);
       fieldId.value = '';
       return fieldValue; 
    }
    if(htmlId){
        let htmlValue = parseFloat(htmlId.innerText);
        return htmlValue;
    }
}
//calculate deposit and withdraw
function depositWithdraw(fieldValue, htmlValue){
        
            let update = fieldValue + htmlValue;
            return update;
}
//calculate balance
function balanceUpdate(depositValue,withdrawValue, previousBalance){
    if(depositValue){
        let newbalance = previousBalance + depositValue ;
        return newbalance
    }
    if(withdrawValue){
        let newbalance = previousBalance - withdrawValue;
        return newbalance;
        }
    }
function error(){
    console.log(alert('Please Provide a valid input'));
}
//Deposit
id('deposit-btn').addEventListener('click', function(){
let depositFielId = id('deposit-input');
let depositFieldValue = idValue(depositFielId, '');
let depositPreviousId = id('deposit-previous');
let depositPreviousValue = idValue('', depositPreviousId);
let previousBalanceId = id('balance-previous');
let balance = idValue('',previousBalanceId);
if(depositFieldValue>0){
    let depositTotal = depositWithdraw(depositFieldValue, depositPreviousValue);
depositPreviousId.innerText = depositTotal;
let currentBalance = balanceUpdate(depositFieldValue, '',balance);
previousBalanceId.innerText = currentBalance;
}
else{
    error();
}
})
//Withdraw
id('withdraw-btn').addEventListener('click', function(){
    let withdrawFielId = id('withdraw-input');
    let withdrawFieldValue = idValue(withdrawFielId, '');
    let withdrawPreviousId = id('withdraw-previous');
    let withdrawPreviousValue = idValue('', withdrawPreviousId);
    let previousBalanceId = id('balance-previous');
    let balance = idValue('',previousBalanceId);
    if(withdrawFieldValue>0 && withdrawFieldValue<=balance){
        let withdrawTotal = depositWithdraw(withdrawFieldValue, withdrawPreviousValue);
    withdrawPreviousId.innerText = withdrawTotal;
    let currentBalance = balanceUpdate('', withdrawFieldValue,balance);
    console.log(currentBalance);
    previousBalanceId.innerText = currentBalance;
    }
    else{
        error();
    }
})