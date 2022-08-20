//Both are same:
window.localStorage;
localStorage;
//Both are same
sessionStorage;
window.sessionStorage;

//set Item to Storage
localStorage.setItem('age', 25);

//get Item from storage
localStorage.getItem('age')//output: 25

//read string data by converting into object
const x = localStorage.getItem('__https://api.geeksforgeeks.org/api/institutes/all__data');
const y = JSON.parse(x);
y.datums;

//reset object to local storage by converting into string
const test = {
    name: 'Nusrat',
    age: 25
}
const tectConvert = JSON.stringify(test);
localStorage.setItem('__https://api.geeksforgeeks.org/api/institutes/all__data', tectConvert);

//add object property as a string
const a = localStorage.getItem('frequently-viewed-documents');
const b = JSON.parse(a)[0];
b.name = 'Nusrat Hurain';
const d = JSON.stringify(b);
localStorage.setItem('frequently-viewed-documents',d);

//Facebook session storage test

const t1 = sessionStorage.getItem('sp_pi');
const t2 = JSON.parse(t1);
t2.pageInfo.extraData.imp_id; //output: '0H9rrBHbT72R71VJg'
t2.pageInfo.extraData.name = 'Nusrat Hurain';
const t3 = JSON.stringify(t2);
