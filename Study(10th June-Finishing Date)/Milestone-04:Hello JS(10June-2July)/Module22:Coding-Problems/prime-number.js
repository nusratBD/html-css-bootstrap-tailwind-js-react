//২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

function primeNumber(num){
    let notPrime = false;
    let prime = true;
    for(let i = 2; i<num; i++){
        if(num%i==0){
            return notPrime;
        }
    }
    if(notPrime){
        return notPrime;
    }
    else{
        return prime;
    }
}
let num = 17;
let result = primeNumber(num);
console.log(result);