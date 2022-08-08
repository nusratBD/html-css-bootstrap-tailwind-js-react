function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPosts(data));
}
loadPosts();
function displayPosts(posts){
    let postSection = document.getElementById('posts');
    for(const post of posts){
        let div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3 class="title">${post.title}</h3>
        <p>${post.body}</P>
        `
        postSection.appendChild(div);
    }
}