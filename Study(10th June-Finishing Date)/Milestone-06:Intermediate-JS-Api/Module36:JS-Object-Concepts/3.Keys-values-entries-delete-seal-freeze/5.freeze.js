/* 
Freeze: If we freeze an object, we can not delte, add, or modify its object
*/
const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
Object.freeze(self);
delete self.age;//can not delete
self.home = 'Lakshmipur';//can not include
self.age = 26;//can not modify
console.log(self);;