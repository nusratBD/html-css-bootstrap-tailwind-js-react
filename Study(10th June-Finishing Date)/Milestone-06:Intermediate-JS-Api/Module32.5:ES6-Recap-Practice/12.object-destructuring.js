//৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

let product = {
    name: 'hp laptop',
    price: '50000',
    ram: '4GB',
    processor: 'CORE i5',
    version: '7th Gen'
}
const {name, price, ram, processor, version} = product;
console.log(processor);