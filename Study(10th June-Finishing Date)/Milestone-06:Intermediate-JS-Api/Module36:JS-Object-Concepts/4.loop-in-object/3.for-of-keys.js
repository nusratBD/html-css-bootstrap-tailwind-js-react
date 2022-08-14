const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
const keys = Object.keys(self);
console.log(keys);
for(const key of keys){
    console.log(key,': ',self[key]);
}