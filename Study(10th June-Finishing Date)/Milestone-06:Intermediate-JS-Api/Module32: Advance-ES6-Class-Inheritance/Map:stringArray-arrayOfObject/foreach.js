/*
Same as map. But it doesn't return any value inside of an array. It just consoles value inside of the arrow function
*/
const shopping = [
    {
        name: 'laptop',
        price: '50000'
    },
    {
        name: 'phone',
        price: '12000'
    },
    {
        name: 'Samrt Watch',
        price: '3000'
    },
    {
        name: 'Books',
        price: '1500'
    },
    {
        name: 'Diary',
        price: '300'
    },
    {
        name: 'Mug',
        price: '150'
    },
    {
        name: 'Water Bottle',
        price: '220'
    }
];
const foreach = shopping.forEach(product => product);
console.log(foreach); //output: undfined
shopping.forEach(product => console.log(product));