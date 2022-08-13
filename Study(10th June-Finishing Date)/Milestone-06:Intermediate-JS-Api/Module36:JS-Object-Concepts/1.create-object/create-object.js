//1. Using Object Literal
const self = {name: 'Nusrat Hurain', profession: 'Software Engineer'};

//02. Using Constructor
const person = new Object();
console.log(person);//output: {}

//03.
const human = Object.create(null);
console.log(human);//output: [Object: null prototype] {}
const human2 = Object.create(self);
console.log(self.profession);//output: Software Engineer

//04. Class: Syntactical Sugar
class People{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const people = new People('Nusrat Hurain', 25);
console.log(people);

//05. Function
function OurPeople(name){
    this.name = name;
}
const people2 = new OurPeople('Nusrat Hurain');
console.log(people2);