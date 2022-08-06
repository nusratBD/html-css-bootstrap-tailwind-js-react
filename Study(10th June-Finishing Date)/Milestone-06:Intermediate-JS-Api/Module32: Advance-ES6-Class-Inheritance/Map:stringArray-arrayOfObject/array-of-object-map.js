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
const shoppingItems = shopping.map(product => product.name);
console.log(shoppingItems);
/*
output: [
  'laptop',
  'phone',
  'Samrt Watch',
  'Books',
  'Diary',
  'Mug',
  'Water Bottle'
]
Note: Inside of an array
*/
shopping.map(product => console.log(product.price));
/*
output: 50000
12000
3000
1500
300
150
220
Note: Outside of an array
*/
const all = shopping.map(product => product);
console.log(all);
const foreach = shopping.forEach(product => product);
console.log(foreach);