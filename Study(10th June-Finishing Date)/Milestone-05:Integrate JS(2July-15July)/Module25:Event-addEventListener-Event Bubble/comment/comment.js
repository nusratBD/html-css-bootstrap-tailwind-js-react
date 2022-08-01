document.getElementById('comment-btn').addEventListener('click', function(){
    let commentBox = document.getElementById('comment');
    let p = document.createElement('p');
    p.innerText = commentBox.value;
    let addComment = document.getElementById('addComment');
    addComment.appendChild(p);
    commentBox.value = '';
})