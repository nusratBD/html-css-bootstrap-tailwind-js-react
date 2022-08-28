//3 types.
let singleQuote1 = 'My name is Nusrat Hurain';
let doubleQuote1 = "I am from Bangladesh";
let caret1 = `I want to be a software Engineer`;

//Problem of singleQuote:
//1. We can not write multiline.
//2. We have to concat to add to different string and new line tag(\n)for new lines.
let singleQuote2 = 'My name is Nusrat Hurain.' + ' ' + 'I am from Bangladesh.' + ' ' + 'I want to be a software Engineer.';
console.log(singleQuote2);
let singleQuote3 = 'My name is Nusrat Hurain.\n' + 'I am from Bangladesh.\n' + 'I want to be a software Engineer.\n';
console.log(singleQuote3);

//Problem of doubleeQuote:
//1. We can not write multiline.
//2. We have to concat to add to different string and new line tag(\n)for new lines.
let doubleQuote2 = "My name is Nusrat Hurain." + " " + "I am from Bangladesh." + " " + "I want to be a software Engineer.";
console.log(doubleQuote2);
let doubleQuote3 = "My name is Nusrat Hurain.\n" + "I am from Bangladesh.\n" + "I want to be a software Engineer.\n";
console.log(doubleQuote3);

// Benefits of Caret
let caret2 = `My Name is Nusrat Hurain.
I'm from Bangladesh.
I'm 25 years old.
I have too many dreams.
My aim is to be software Engineer.
That's why I'm working hard.`;
console.log(caret2);
