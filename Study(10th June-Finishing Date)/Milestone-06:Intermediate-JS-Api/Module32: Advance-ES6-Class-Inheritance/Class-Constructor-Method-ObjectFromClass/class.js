/* Class is used to created object. The first letter of a class name should be capital.*/
class Support{
    name;
    service='Web Development';
    session(){
       console.log('Excellent');
    }//function: inside of class, we can not write function to create a function
}
let result = new Support();
console.log(result);