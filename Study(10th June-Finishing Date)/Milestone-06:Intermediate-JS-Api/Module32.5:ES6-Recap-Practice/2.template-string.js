/* 
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

//01. Declare a variable
let name = 'Nusrat Hurain';
//02. Create Object
const mySelf = {
    country: 'Bangladesh',
    district: 'Lakshmipur',
    profession: 'Software Engineer'
}
//03. Destructure the object
const {country, district, profession} = mySelf;
//04. Create a string
const text = `
My name is ${name}. I am from ${country}. My home district is ${district}. Passionately and Professionally I'm a ${profession}.
`;
console.log(text);

