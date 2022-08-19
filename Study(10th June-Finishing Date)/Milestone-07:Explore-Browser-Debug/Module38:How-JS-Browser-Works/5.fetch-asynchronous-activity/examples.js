console.log('aaaaaaaaaaa');
const test = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
}
test();
  console.log('bbbbbbbbbbb');
  console.log('cccccccccccc');
  console.log('ddddddddddddd');

  /* 
  output:
  aaaaaaaaaaa
examples.js:8 bbbbbbbbbbb
examples.js:9 cccccccccccc
examples.js:10 ddddddddddddd
index.html:39 Live reload enabled.
examples.js:5 Object
  */