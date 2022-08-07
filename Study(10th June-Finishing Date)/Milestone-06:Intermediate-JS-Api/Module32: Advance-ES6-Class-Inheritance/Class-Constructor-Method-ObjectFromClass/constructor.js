/*
Constructor: constructor is an special function that set values of any existing object properties
*/
class Myself{
    name = 'Nusrat Hurain';
    age;
    profession='Software Engineer';
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        // this.profession = profession //If we access any properties inside the constructor, but we don't pass the parameter while calling the class then it will be undefined although we set the value intially
    }
    instruction(){
        console.log(this.name, 'Start a support session');//if we want to access any property inside the function we must use thid keyword(this.properties)
    }
}
let result = new Myself('Nusrat Hurain Nuha', 25);
let result2 = new Myself('Sultana Kamal', 26);
console.log(result, result2);
result.instruction();//access the function from the class
result2.instruction();
