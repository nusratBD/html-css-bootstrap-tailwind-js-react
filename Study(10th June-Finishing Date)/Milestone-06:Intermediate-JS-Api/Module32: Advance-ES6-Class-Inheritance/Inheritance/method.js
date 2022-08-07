//Method: Function except constructor inside of a class is called method
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
    mother()//Method
    {
        console.log(this.name, 'is', this.age, 'years old. She is a', this.role,'.');
    }
}
let motherRole = new Mother('Salma Begum', 53, 'mother');
console.log(motherRole)
motherRole.mother();