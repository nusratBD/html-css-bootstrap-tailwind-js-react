/* 
How to stop setInterval() execution?

setInterval always return an id. So, 
1) first of all we have to store the returned value of setInterval in a variable.
2) put a condtion inside the setInterval function.
3) According to the condtion set clearInterval() and inside the clearInterval(), pass the id of the setInterval()
*/
let count = 0;
const id = setInterval(()=>{
    count++;
    if(count===16){
        clearInterval(id);
    }
    else{
        console.log(count,'. Hello');
    }
}, 100);