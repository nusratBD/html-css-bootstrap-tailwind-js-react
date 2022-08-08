//৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

let products = [
    phone = {name: 'Redmi', price: 20000},
    smartwatch = {name: 'Samsung', price: 5000},
    laptop = {name: 'hp', price: 50000},
    dresses = {name: 'Ladis collection', price: 3000}
];
let result = products.find(product=>product.price = 5000);
console.log(result);