//01
console.log(location);
//02
console.log(window.location);
/* 01 and 02 both are same. */

const reload = () =>{
    console.log(location.reload());
}
const goFacebook = () =>{
    location.href = 'https://www.facebook.com/';
}
const assign = () =>{
    location.assign('https://web.programming-hero.com/');
}
console.log(location.search);