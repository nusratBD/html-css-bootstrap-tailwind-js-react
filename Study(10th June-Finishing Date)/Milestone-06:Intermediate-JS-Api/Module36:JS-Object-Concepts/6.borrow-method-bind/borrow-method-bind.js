const student1 = {
    name: 'MD. X',
    class: 10,
    income: 5000,
    balance: 5000,
    balanceCal: function service(household){
        if(this.balance>=household){
            this.balance = this.balance - household;
            console.log('Household Cost: ',household);
        }
        else{
            console.log('Household Cost: ',household,'. Sorry your balance is insufficient.');
        }
    }
}
const student2 = {
    name: 'MD. Y',
    class: 12,
    income: 8000,
    balance: 8000
}
//binding balanceCal property with student2 object
const bind2 = student1.balanceCal.bind(student2);
bind2(500);
console.log(student2);
student1.balanceCal(6000);
console.log(student1);