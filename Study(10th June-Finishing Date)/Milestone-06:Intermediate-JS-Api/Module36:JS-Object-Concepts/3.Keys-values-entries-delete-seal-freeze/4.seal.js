/* 
Seal: If we seal an object, we can not delete any property of that object even we can not add new property, but we can re-assign value.
*/
const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
Object.seal(self);
delete self.age;//can not delete
self.home = 'Lakshmipur';//can not include
self.age = 26;
console.log(self);;