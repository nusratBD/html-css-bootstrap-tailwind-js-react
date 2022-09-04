function test(balance, y){
    console.log(balance);//output: 1000
    console.log(y);//output: 10
    const remaining = test2(50);
    console.log(remaining);//output: 950
    function test2(price){
        return balance-price;
     }
    
}
test(1000, 10);

/* 
How test2 get balance here.
It first finds 'balance' variable in it.
If it does not find it, it searchs gradually on the top.
Where it gets the value, from there it brings it and uses it.
*/

