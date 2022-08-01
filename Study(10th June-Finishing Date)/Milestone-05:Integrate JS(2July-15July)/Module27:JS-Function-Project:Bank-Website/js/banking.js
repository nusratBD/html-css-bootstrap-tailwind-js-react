//Deposit & Balance Start
document.getElementById('deposit-btn').addEventListener('click', function(){
    //Update Deposit
    let depositField = document.getElementById('deposit-input');
    let depositFieldValue = parseFloat(depositField.value);
    if(depositFieldValue>0){
        let depositTotalId = document.getElementById('deposit-total')
    let depositPrevious = parseFloat(depositTotalId.innerText);
    let depositTotal = depositPrevious + depositFieldValue;
    depositTotalId.innerText = depositTotal;
    depositField.value = '';

    //Update Balance
    let preveiousBalanceId = document.getElementById('total-balance');
    let preveiousBalance = parseFloat(preveiousBalanceId.innerText);
    let balanceTotal = preveiousBalance + depositFieldValue;
    preveiousBalanceId.innerText = balanceTotal;
    }
    else{
        console.log(alert('Please deposit a valid amount.'))
    }
})
//Deposit and Balance End

//Widthdraw and Balance Start
document.getElementById('withdraw-btn').addEventListener('click', function(){
    let widthdrawField = document.getElementById('withdraw-input');
    let widthdrawFieldVaue = parseFloat(widthdrawField.value);
    let totalBalanceId = document.getElementById('total-balance');
    let previousTotalBalance = parseFloat(totalBalanceId.innerText);
    //Update Withdraw
    if(widthdrawFieldVaue<=previousTotalBalance && widthdrawFieldVaue>0){
        let previousWithdrawId = document.getElementById('withdraw-total');
    let previousWithdraw = parseFloat(previousWithdrawId.innerText);
    let withdrawTotal = previousWithdraw + widthdrawFieldVaue;
    previousWithdrawId.innerText = withdrawTotal;
    widthdrawField.value = '';

    //Update Balance
    let totalBalance = previousTotalBalance - widthdrawFieldVaue;
    totalBalanceId.innerText = totalBalance;
    }
    else{
        console.log(alert('Please give a valid amount.'));
    }
})