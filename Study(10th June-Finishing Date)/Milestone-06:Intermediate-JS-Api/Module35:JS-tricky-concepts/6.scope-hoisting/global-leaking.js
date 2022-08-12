/* 
When we don't declare the type of a variable(const, let, var), it becomes global automatically. This is called global leaking,
*/
const add = (num1, num2)=>{
    const result = num1 + num2;
    if(result>10){
        mood = 'happy';
        console.log(mood);
    }
}
add(5, 10);
console.log(mood);