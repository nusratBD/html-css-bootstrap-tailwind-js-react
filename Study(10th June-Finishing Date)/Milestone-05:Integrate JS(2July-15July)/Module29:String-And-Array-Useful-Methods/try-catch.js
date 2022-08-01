//If there is any eeror occured inside of try{}, it won't effect the the code and won't give any error message
const name = 'Nusrat';
try{
    name = 'Hurain';
}
//To see the error of try{}, we can use catch. It will show the error, but won't effect on the code.
catch(error){
console.log(error);
}
finally{
 //HW   
}
console.log(name);