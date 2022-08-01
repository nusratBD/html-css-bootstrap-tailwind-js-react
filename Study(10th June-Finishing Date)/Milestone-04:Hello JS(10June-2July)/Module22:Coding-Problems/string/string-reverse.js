let text = 'Nusrat Hurain Nuha!';
function stringReverse(text) {
    let reverse = '';
    for (let char of text) {
        reverse = char + reverse;
    }
    return reverse;
}
let result = stringReverse(text);
console.log(result);