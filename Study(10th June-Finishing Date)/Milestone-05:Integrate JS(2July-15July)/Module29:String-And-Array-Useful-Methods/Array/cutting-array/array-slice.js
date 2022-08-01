let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,11, 22, 33, 44, 55, 66, 77];
let slice = num.slice(3, 7);//x=starting value, y=(y-1) ending value
let slice2 = num.slice(5);//if ending point is absent, it will take till the last value automatically
console.log(slice2);
console.log(num);//Inspite of doing slice, the main array doesn't change