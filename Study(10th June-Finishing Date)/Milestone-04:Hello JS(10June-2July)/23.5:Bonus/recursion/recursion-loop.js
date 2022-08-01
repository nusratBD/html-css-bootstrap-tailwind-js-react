function recursion(a){
    if(a>5){
        return;
    }
    console.log(a);
    // recursion(a+1);
    recursion(++a);
}
recursion(1);