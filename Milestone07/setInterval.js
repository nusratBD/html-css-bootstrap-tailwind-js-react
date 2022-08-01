let second = 0;
// const timeID = setInterval(() => {
//     console.log(second++);
//     if(second>6){
//         clearInterval(timeID);
//     }
// }, 1000);
const timeID = setInterval(() => {
    console.log(++second);
    if(second>6){
        clearInterval(timeID);
    }
}, 1000);