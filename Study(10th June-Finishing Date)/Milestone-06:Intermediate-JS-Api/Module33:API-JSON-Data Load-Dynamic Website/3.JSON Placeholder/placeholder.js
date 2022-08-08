fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())//convert json into jso with the functionality of arraow function and return the jso
  .then(json => console.log(json.title))//console the jso