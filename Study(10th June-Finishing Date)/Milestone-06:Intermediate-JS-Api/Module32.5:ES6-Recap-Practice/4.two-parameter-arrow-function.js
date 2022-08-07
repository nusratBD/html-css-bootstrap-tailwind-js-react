/* 
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/
const two = (num1, num2) =>{
    const output1 = num1 + 2;
    const output2 = num2 + 2;
    const output = output1 * output2;
    return output;
}
const result = two(2, 3);
console.log(result);