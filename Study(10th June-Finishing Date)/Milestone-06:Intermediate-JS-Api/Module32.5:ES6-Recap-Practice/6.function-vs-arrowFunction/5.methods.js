class Test{
    name;
    roll;
    constructor(name, roll){
        this.name = name;
        this.roll = roll;
    }
    normal(){//normal function method
        console.log('My name is', this.name);
    }
    arrow = () => console.log('My roll is', this.roll);//arrow function method
}
    
const normalTest = new Test('Nusrat Hurain', 170515);
normalTest.normal();
normalTest.arrow();