function depositWithdraw(x, y){
    let depositField = document.getElementById(x);
    let depositFieldValue = parseFloat(depositField.value);
    let preveiousBalanceId = document.getElementById('total-balance');
    let preveiousBalance = parseFloat(preveiousBalanceId.innerText);
    if(depositFieldValue>0){
        let depositTotalId = document.getElementById(y)
    let depositPrevious = parseFloat(depositTotalId.innerText);
    let depositTotal = depositPrevious + depositFieldValue;
    depositTotalId.innerText = depositTotal;
    depositField.value = '';
    return depositFieldValue;
    }
}
//Deposit & Balance
document.getElementById('deposit-btn').addEventListener('click', function(){
    let z = depositWithdraw('deposit-input','deposit-total');
    let preveiousBalanceId = document.getElementById('total-balance');
    let preveiousBalance = parseFloat(preveiousBalanceId.innerText);
    let balanceTotal = preveiousBalance + z;
    preveiousBalanceId.innerText = balanceTotal;
    }
)

//Withdraw & Balance
document.getElementById('withdraw-btn').addEventListener('click', function(){
   let withdrawValue = depositWithdraw('withdraw-input', 'withdraw-total');
   let preveiousBalanceId = document.getElementById('total-balance');
    let preveiousBalance = parseFloat(preveiousBalanceId.innerText);
    let balanceTotal = preveiousBalance - withdrawValue;
    preveiousBalanceId.innerText = balanceTotal;
})



