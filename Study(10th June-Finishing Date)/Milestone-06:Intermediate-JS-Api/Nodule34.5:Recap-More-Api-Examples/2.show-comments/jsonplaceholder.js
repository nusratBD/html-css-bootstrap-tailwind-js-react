//২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 


const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment(data));
}

const displayComment = (data) =>{
    console.log(data);
    const commentContainer = document.getElementById('comments');
    data.forEach(comment=>{
        const p = document.createElement('p');
        p.classList.add('comment');
        p.innerText = `${comment.body}`;
        commentContainer.appendChild(p);
    });
}