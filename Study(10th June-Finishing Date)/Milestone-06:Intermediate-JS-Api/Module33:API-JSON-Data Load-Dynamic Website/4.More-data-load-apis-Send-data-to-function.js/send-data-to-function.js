function loadComment(){
 fetch('https://jsonplaceholder.typicode.com/comments')
.then(comment => comment.json())
.then(data=>showComment(data));
}
function showComment(data){
    console.log(data);
}