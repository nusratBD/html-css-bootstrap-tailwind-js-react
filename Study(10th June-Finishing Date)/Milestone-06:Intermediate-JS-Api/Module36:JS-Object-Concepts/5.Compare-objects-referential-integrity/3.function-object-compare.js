//Actual way to compare: 

const first = {a: 10, b: 20};
const second = {a: 10, b:20};
function compare(first, second){
if(Object.keys(first).length!==Object.keys(second).length){
    return false;
}
for(const key in first){
    if(first[key]!==second[key]){
        return false;
    }
    else{
        return true;
    }
}
}
const result = compare(first, second);
console.log(result);