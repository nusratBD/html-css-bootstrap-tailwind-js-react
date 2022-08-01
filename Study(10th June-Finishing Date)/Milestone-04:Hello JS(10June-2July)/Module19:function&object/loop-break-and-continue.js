//Break:

//01:
// var i = 0;
// while(i<=10){
//     console.log(i);
//     if(i==8){
//         break;
//     }
//     i++;
// }

//02:
// for(var i = 0; i<10; i++){
//     console.log(i);
//     if(i==7){
//         break;
//     }
// }

//03:
// var numbers = [10, 20, 33, 46, 11, 87, 92, 109, 834, 18];

// for(var i = 0; i<=numbers.length; i++){
//     console.log(numbers[i]);
//     if(numbers[i]>90){
//         break;
//     }
// }

//Continue:
var numbers = [10, 20, 33, 46, 11, 87, 92, 109, 834, 18];
for(var i = 0; i<=numbers.length; i++){
    if(numbers[i]>90){
        continue;
    }
    console.log(numbers[i]);
}
