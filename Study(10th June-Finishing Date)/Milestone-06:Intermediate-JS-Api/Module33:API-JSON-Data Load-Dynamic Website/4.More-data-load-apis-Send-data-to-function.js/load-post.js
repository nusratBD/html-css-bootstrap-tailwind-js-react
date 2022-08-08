function loadPost(){
 fetch('https://jsonplaceholder.typicode.com/posts')
.then(x => x.json())
.then(data => console.log(data));
}