//১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

function add(a, b, c=7){
    return a + b +c;
}
let result1 = add(2, 3, 4);
let result2 = add(2, 3);
console.log(result1);//output: 9
console.log(result2);//output: 12