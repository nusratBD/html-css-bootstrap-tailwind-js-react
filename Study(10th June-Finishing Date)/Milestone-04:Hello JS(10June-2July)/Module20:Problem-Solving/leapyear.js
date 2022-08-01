function leapYear(year){
    if((year%4==0) && ((year%100!=0) || (year%400==0))){
        return "Leap Year.";
    }
    else{
        return "Not a Leap Year.";
    }
}
let x = 2016;
let result = leapYear(x);
console.log(result);