// ৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে। 


let numbers = [4, 6, 3, 2, 8, 3];
console.log(numbers.sort());
let numbers2 = [23, 89, 12, 119, 45, 7, 83];
let sort2 = numbers2.sort(function(a,b){return a - b});
console.log(sort2);