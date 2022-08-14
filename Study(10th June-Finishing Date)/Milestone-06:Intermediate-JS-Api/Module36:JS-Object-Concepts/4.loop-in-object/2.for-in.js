const self = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000
}
for(const prof in self){
    console.log(prof,': ',self[prof]);
    /* 
    output:
    name :  Nusrat Hurain
    age :  25
    profession :  Software Engineer
    salary :  50000000
    */
}