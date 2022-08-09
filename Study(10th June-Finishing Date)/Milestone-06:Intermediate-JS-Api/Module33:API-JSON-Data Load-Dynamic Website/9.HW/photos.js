function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayPhoto(data));
}
loadPhoto()
function displayPhoto(photos){
    let photoContainer = document.getElementById('photos');
    for(let photo of photos){
        let img = document.createElement('img');
        img.setAttribute('src', `${photo.url}`);
        photoContainer.appendChild(img);
    }
}