let array = [10, 23, 5, 78, 14, 6];
 function arrayLargestElement(value){
    let largestElement = value[0];
    for(let i = 0; i<value.length; i++){
        if(value[i]>largestElement){
            largestElement = value[i];
        }
    }
    return largestElement;
 }
 let result = arrayLargestElement(array);
 console.log("The largest value is: ", result);