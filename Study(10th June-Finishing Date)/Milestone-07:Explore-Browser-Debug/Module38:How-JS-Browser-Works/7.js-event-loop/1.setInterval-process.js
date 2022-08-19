/* 
We can put condition inside of setInterval(), but can not keep setInterval() inside of a condition.
*/
/* for(i=0; i<=100; i++){
    const id = setInterval(()=>{
            if(i<80){
                console.log(i,'Interval')
            }
            else{
                clearInterval(id);
            }
        })
    
}=>It will never stop.*/ 
let i = 0;
const id = setInterval(()=>{
    for(; i<=100; i++){
        console.log(i);
        if(i<80){
            console.log(i,'Interval')
        }
        else{
            clearInterval(id);
        }
    }

},1000);