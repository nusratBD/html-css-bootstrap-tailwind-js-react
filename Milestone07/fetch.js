console.log('First Code');
console.log('Second Code');
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
  console.log('Third Code');