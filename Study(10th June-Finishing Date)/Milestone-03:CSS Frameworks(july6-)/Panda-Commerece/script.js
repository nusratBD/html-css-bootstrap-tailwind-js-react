//Find Element by tag name
let h5s = document.getElementsByTagName('h1');
for(let h5 of h5s){
    h5.style.color = 'lightblue';
}
//Find Element by id
document.getElementById('backpack').style.backgroundColor = 'tomato';
//Find by class name
let cards = document.getElementsByClassName('card');
for(let card of cards){
    card.style.borderRadius = '30px';
}

//Button Function Event handler
function btn(){
    console.log('Hello');
}

//Shoe Delete from parent node
document.getElementById('shoes').addEventListener('click', function(event){
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    
})

//Backpack Delete from parent node
document.getElementById('backpack').addEventListener('click', function(event){
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
})

//Subscribe Button Disable & Able
    let disableBtn = document.getElementById('subscribe-btn');
    let input = document.getElementById('input-field');
    input.addEventListener('keyup', function(event){
        if(event.target.value=='email'){
            disableBtn.removeAttribute('disabled');
            if(disableBtn.addEventListener('click',function(){
                event.target.value='';
            }));
        }
        else{
            disableBtn.setAttribute('disabled', true);
        };
    });

    //mouseenter
    let images = document.getElementsByClassName('card-img-top');
    for(let img of images){
        img.addEventListener('mouseenter', function(){
            img.style.height="500px";
        })
        img.addEventListener('mouseout', function(){
            img.style.height="350px";
        })
        
    }

    //backgroundcolor change:
//    let bg = document.getElementById('subscribe');
//    bg.addEventListener('dblclick', function(){
//     bg.style.backgroundColor = 'green';
//    })
let bgs = document.getElementsByClassName('my-background');
for(let bg of bgs){
    bg.addEventListener('dblclick', function(){
        bg.style.backgroundColor = 'green';
    })
}