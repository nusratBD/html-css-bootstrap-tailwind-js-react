/*
Prototype: Each object has a private property which holds a link to another object called its prototype.

//Prototypical Inheritance Explained on the bottom of the page
*/
//Parent Class
class Self{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

//01
class Mother extends Self{
    role;
    constructor(name, age, role){
        super(name, age);
        this.role = role;
    }
    mother(){
        console.log(this.name, 'is', this.age, 'years old. She is a', this.role,'.');
    }
}
let motherRole = new Mother('Salma Begum', 53, 'mother');
console.log(motherRole)
motherRole.mother();

//02
class Daughter extends Self{
    profession;
    constructor(name, age, profession){
        super(name, age);
        this.profession = profession;
    }
    daughter(){
        console.log(this.name, 'is', this.age, 'years old. She is a', this.profession,'.');
    }
}
let daughterRole = new Daughter('Nusrat Hurain', 25, 'Software Engineer');
console.log(daughterRole)
daughterRole.daughter();

//03
class Sister extends Self{
    role;
    constructor(name, age, sister){ //here sister is the parameter of role property
        super(name, age);
        this.role = sister;
    }
    sister(home){
        console.log(this.name, 'is', this.age, 'years old. She is a', this.role,'. Her home is', home);
    }
}
let sisterRole = new Sister('Salma Begum', 53, 'sister');
let sisterRole2 = new Sister('Nusrat Hurain', 25, 'sister');
console.log(sisterRole, sisterRole2)
sisterRole.sister('Dhaka');
sisterRole2.sister('Lakshmipur');
console.log(sisterRole2.name);//prototypical inheritance
/*
Prototypical inheritance is chaining method from bottom to top
Here, name=>sisterRole2=>Sister=>Self(It got the name here)
*/
console.log(sisterRole2.__proto__.__proto__.__proto__);//prototypical chain/ protypical Inheritance
console.log(sisterRole.role);
// console.log(sister.profession); output: error. Because profession is not the property of Sister class