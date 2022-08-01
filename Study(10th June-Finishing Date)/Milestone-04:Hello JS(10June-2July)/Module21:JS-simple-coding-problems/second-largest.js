//৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

let array = [12, 3, 44, 56, 89, 65];
function scondLargest(array){
    let largest = array[0];
    for(let i = 0; i<array.length; i++){
        if(array[i]>largest){
            largest = array[i];
        }
    }
    
    let firstLargest = largest;
    let secondLargest = array[0];
    for(let j = 0; j<array.length; j++){
        if(array[j]>secondLargest && array[j]<firstLargest){
            secondLargest = array[j];
        }
    }
    return secondLargest;
}
let result = scondLargest(array);
console.log(result);