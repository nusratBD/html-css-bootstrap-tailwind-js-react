/*
Constructor: constructor is an special function that set values of any existing object properties
*/
class Myself{
    name = 'Nusrat Hurain';
    age;
    profession='Software Engineer';
    country='BD';
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession //If we access any properties inside the constructor, we must provide the parameter while calling the class. To understand it, run result.
    }
    instruction(){
        console.log(this.name, 'Start a support session');//if we want to access any property inside the function we must use thid keyword(this.properties)
    }
}
let result = new Myself( 25);// output: Myself { name: 25, age: undefined, profession: undefined }
let result2 = new Myself('Sultana Kamal', 26);// output: Myself { name: 'Sultana Kamal', age: 26, profession: undefined }
let result3 = new Myself('Nusrat Hurain Nuha', 25, 'Software Engineer');
console.log(result, result2, result3);
result.instruction();//access the function from the class
result2.instruction();

/*
Note: We just access those propertise which will change person to person. Fixed propertirs for everyone will stay outside of constructor with their specfic value.
*/
//Examples:
class students07{
    name;
    class=7;
    roll;
    marks;
    constructor(name, roll,marks){
        this.name = name;
        this.roll = roll;
        this.marks = marks;
    }
}
let student2 = new students07('Afnan Ahmed', 2, 300);
let student1 = new students07('Kaniz Fatema', 1, 350);
let student3 = new students07('Rupusi Khatun', 3, 280);
console.log(student1, student2, student3);