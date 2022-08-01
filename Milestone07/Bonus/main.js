const images = [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/4.jpeg',
    'images/5.jpeg'
]
let imgIndex = 0;
const imgID = document.getElementById('set-img');
setInterval(() => {
    if(imgIndex>=images.length){
        imgIndex = 0;
    }
    imgID.setAttribute('src',images[imgIndex]);
    imgIndex++;    
}, 1000);