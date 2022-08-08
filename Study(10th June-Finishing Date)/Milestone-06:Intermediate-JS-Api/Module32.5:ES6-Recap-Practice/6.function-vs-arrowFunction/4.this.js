/* 
this value inside of an arrow function always equals this value from the outer function.
*/
const this1 = () =>{
    console.log(this);
}
function this2(){
    console.log(this);
}
this1();//output: {}
this2();
let me = { 
    name: "Ashutosh Verma", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };
   me.thisInArrow(); 
   me.thisInRegular();
