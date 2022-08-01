/*Case 01: In a jungle you will see 10 animals per mile to the first 10 miles.

Case 02: 50 animals per mile for the second 10 miles.

Case 03: 100 animals per mile for more than 20 miles
*/

function animalsCount(miles){
    let animalsFirst10 = 10;
    let animalsSecond10 = 50;
    let animalsThird = 100;
    if(miles<=10){
        let total = animalsFirst10 * miles;
        return total;
    }
    else if(miles<=20){
        let totalFirst10 = 10 * animalsFirst10;
        let totalSecond10 = (miles - 10) * animalsSecond10;
        let total = totalFirst10 + totalSecond10;
        return total;
    }
    else{
        let totalFirst10 = 10 * animalsFirst10;
        let totalSecond10 = 10 * animalsSecond10;
        let totalThird10 = (miles - 20) * animalsThird;
        let total = totalFirst10 + totalSecond10 + totalThird10;
        return total;
    }
}
let miles = 21;
let result = animalsCount(miles);
console.log(result);