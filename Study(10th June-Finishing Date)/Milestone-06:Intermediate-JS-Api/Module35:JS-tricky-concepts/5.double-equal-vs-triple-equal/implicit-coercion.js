/* 
Implicit Coercion: Implicit coercion refers to type conversions that are hidden, with non-obvious side-effects that implicitly occur from other actions. In other words, implicit coercions are any type conversions that aren't obvious (to you).

double equla(==) does the implicit coercion. 
*/

const x = '1';
const y = true;
if(x==y){
    console.log('True');
}
else{
    console.log('False');
}
//output: true. (It is because of implicit coercion)