const student1 = {
    name: 'MD. X',
    class: 10,
    income: 5000,
    balance: 5000,
    balanceCal: function charge(household, pocketMoney){
        if(this.balance>=household){
            this.balance = this.balance - household - pocketMoney;
            console.log('Your total cost is: ',(household + pocketMoney));
            console.log('Current Balance: ',this.balance);
        }
        else{
            console.log('Total cost: ',(household + pocketMoney), 'is greated than your balance: ',this.balance);
        }
    }
}
const student2 = {
    name: 'MD. Y',
    class: 12,
    income: 8000,
    balance: 8000
}

const student3 ={
    name: 'MD. P',
    class: 9,
    income: 6000,
    balance: 6000
}

const bind2 = student1.balanceCal.bind(student2);
const bind3 = student1.balanceCal.bind(student3);
student1.balanceCal(1000, 500);
bind2(1000, 800);
bind3(1200, 200);
console.log(student1);
console.log(student2);
console.log(student3);