let array = [1, 4, 9, -9, 4, -6, -11];
function arrayLowest(value){
    let lowestValue = array[0];
    for(let i = 0; i<value.length; i++){
        if(value[i]<lowestValue){
            lowestValue = value[i];
        }
    }
    return lowestValue;
}
let result = arrayLowest(array);
console.log(result);