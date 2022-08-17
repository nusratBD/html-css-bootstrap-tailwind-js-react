const spinnerConatiner = document.getElementById('spinner');
const loadImg = () =>{
 fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(data=>displayImg(data));
spinnerConatiner.style = 'display: block';
}

const displayImg = (imgs)=>{
const imgContainer = document.getElementById('imgs');
imgContainer.textContent = '';
console.log(imgs);
imgs.forEach(img=>{
    console.log(img);
    const div = document.createElement('div');
    div.classList.add('img');
    div.innerHTML = `
    <img src=${img.url}>
    `;
    imgContainer.appendChild(div);
    spinnerConatiner.style = 'display: none';
})
}