const numbers = [2, 4, 7, 9, 5];
const output = numbers.map(x=>x*2);
// console.log(output);
//Working Principle of map()
//1. loop lore
//2. function call kore
//3. output e paya element guloke 1ta array te store kore.
 const students = [
     {name:'Nusrat Hurain', roll:101, class: 'five'},
     {name:'Sultana Dongi', roll:102, class: 'six'},
     {name:"Ferdousi Khanom", roll:103, class: 'nine'},
     {name:'Isha Jahan', roll:104, class:'three'}
 ]
 const Stname= students.map(student=>student.name);
 console.log(Stname);