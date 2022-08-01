//create element: complex 
/* 
We put it at the  top so that it can be run before blog class style
*/
let article = document.createElement('article');
article.classList.add('blog');
let section = document.getElementById('blogs');
section.appendChild(article);
let h1 = document.createElement('h1');
h1.innerText = "My Created Heading";
article.appendChild(h1);
let p = document.createElement('p');
p.innerText = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";
article.appendChild(p);

//create element: inner HTML
let article2 = document.createElement('article');
article2.classList.add('blog');
article2.innerHTML = `
<h1>My Created Element with inner HTML</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
`;
let section2 = document.getElementById('blogs');
section2.appendChild(article2);


//Give style to the class
let blogs = document.getElementsByClassName('blog');
for(let blog of blogs){
    blog.style.border="5px solid green";
    blog.style.borderRadius = "10px";
    blog.style.margin = "10px";
    blog.style.padding = "10px";
    console.log(blog.style);
}

//create element: simple
let li = document.createElement('li');
li.innerText = "Created li";
let ul = document.getElementById('ul');
ul.appendChild(li);

