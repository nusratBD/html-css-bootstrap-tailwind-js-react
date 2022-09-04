/* 
Closure is accessing data outside of the function. But closure can not be accessed outside of the function.
*/

/* 
Closure is keeping something close so that no one can see it from ouside.
*/
const bank = owner =>{
    let balance = 100;
    return amount =>{
        /* 
        keeps the reference of balance here; that means if balance is updated on
        the bottom, it will be updated on the top. therefore on the next call, the
        data will again updated from last update. 
        */
        balance +=amount;
        return balance;
    }
}
/* const Bank = bank('Mr. Mofij');
console.log(Bank(500));//output: 500
console.log(Bank(500));//output: 1000
console.log(Bank(500).balance); */
/* output: undefined=>We can not access the closure outside of it. */

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