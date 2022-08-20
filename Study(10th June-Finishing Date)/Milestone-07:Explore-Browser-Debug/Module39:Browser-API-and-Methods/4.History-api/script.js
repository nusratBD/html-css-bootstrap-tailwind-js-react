//window.history and history both are same.
console.log(history);
console.log(window.history);
console.log(history.length);

//back and forward for page navigation: previous, next
const historyBack = () =>{
    history.back();
    //It will go back to the previous link(history)
}
const historyForward = () =>{
    history.forward();
}
const plus = () =>{
    history.go(1);
}
const minus = () =>{
    history.go(-1);
}
//back and forward can do by go also. go(-value) for back, go(1) for forward. If we give go(0)/go(), the page will be refreshed.