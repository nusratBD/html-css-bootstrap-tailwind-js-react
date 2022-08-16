//২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 
const singleCommentContainer = document.getElementById('single-comment');
const commentContainer = document.getElementById('comments');
const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment(data));
}
loadComment()
const displayComment = (data) =>{
    console.log(data);
    data.forEach(comment=>{
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        <button onclick="commentDetail(${comment.id})"'>Details</button>
        `;
        commentContainer.appendChild(div);
    });
}
const commentDetail = id =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(data=>displaySinglePost(data));
}
const displaySinglePost = (data) =>{
    console.log(data);
    singleCommentContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('single-post');
    div.innerHTML = `
    <h1>Post Details</h1>
    <h3>Title: <span>${data.title}</span></h3>
    <h3>User Id: <span>${data.userId}</span></h3>
    <p>${data.body}</p>
    `;
    singleCommentContainer.appendChild(div);
    
}