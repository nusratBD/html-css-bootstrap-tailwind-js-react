const loadImg = () =>{
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res=>res.json())
    .then(data=>displayImg(data.slice(0, 50)));
}
loadImg();
const displayImg = (data) =>{
    const imgContainer = document.getElementById('imgs');
    imgContainer.textContent = '';
    data.forEach(img=>{
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${img.url}" class="card-img-top" alt="..." id="${img.id}">
        <div class="card-body">
        <h2>${img.title}</h2>
        </div>
        `;
        imgContainer.appendChild(div);
    })
}
document.getElementById('imgs').addEventListener('click', function(event){
  const id = event.target.id;
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
.then(res=>res.json())
.then(data=>singleImgDisplay(data));

})

const singleImgDisplay = (data) =>{
console.log(data);
const singleImg = document.getElementById('img');
singleImg.textContent ='';
singleImg.innerHTML = `
<div class="card mb-3" style="width: 540px; margin: auto" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.url}" class="img-fluid rounded-start" alt="..." >
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <img src="${data.thumbnailUrl}">
        <h5 class="card-title">${data.title}</h5>
      </div>
    </div>
  </div>
</div>
`
};