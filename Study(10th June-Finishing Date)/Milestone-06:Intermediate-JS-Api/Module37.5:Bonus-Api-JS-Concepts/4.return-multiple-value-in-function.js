const bank2 = owner =>{
    let balance = 100;
    return {
        deposit: amount =>{
        balance +=amount;
        return balance;
        },
        withdraw: amount =>{
            balance -=amount;
            return balance;
            }
    }
}
const Bank2 = bank2('Mr. Abdul');
// console.log(Bank2(200));
/* 
output: TypeError: Bank2 is not a function
    at Object.<anonymous> */
const deposit = Bank2.deposit(100);
console.log(deposit);//output: 200
const withdraw = Bank2.withdraw(50);
console.log(withdraw);//output: 150