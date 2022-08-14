const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
for(const [key, value] of Object.entries(self)){
    console.log(key,': ',value);
}