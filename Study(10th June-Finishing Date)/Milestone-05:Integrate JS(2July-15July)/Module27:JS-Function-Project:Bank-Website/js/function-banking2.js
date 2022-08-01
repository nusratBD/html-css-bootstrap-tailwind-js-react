function id(id){
    let idValue = document.getElementById(id);
    return idValue;
}
function fieldValue(fieldId, htmlId){
    if(fieldId){
        let fieldValue =  parseFloat(fieldId.value);
        fieldId.value = '';
        return fieldValue;
    }
    if(htmlId){
        let textValue = parseFloat(htmlId.innerText);
        return textValue; 
    }
} 
function currentBordValue(inputValue, textValue){
let currentBord = inputValue + textValue;
return currentBord;
}
function error(){
    console.log(alert('Please enter a valid amount'));
}
let balanceId = id('total-balance');
let previousBalance = fieldValue('',balanceId);


//Deposit:
document.getElementById('deposit-btn').addEventListener('click', function(){
let depositFieldId = id('deposit-input');
let depositFieldValue = fieldValue(depositFieldId,'');
let depositId = id('deposit-total');
let depositIdValue = fieldValue('',depositId);
if(depositFieldValue>0){
    let depositBalance = currentBordValue(depositFieldValue, depositIdValue);
    depositId.innerText = depositBalance;
    let balance = depositFieldValue + previousBalance;
    balanceId.innerText = balance;
}
else{
    error();
}
})

//Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    let withdrawFieldId = id('withdraw-input');
    let withdrawFieldValue = fieldValue(withdrawFieldId,'');
    let withdrawId = id('withdraw-total');
    let withdrawIdValue = fieldValue('',withdrawId);
    if(withdrawFieldValue>0 && withdrawFieldValue<=previousBalance){
    let withdrawBalance = currentBordValue(withdrawFieldValue, withdrawIdValue);
    withdrawId.innerText = withdrawBalance;
    let balance = previousBalance - withdrawFieldValue  ;
    balanceId.innerText = balance;
}
else{
    error();
}
})