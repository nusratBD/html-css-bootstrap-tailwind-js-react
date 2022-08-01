let players = document.getElementsByClassName('player');
for(let player of players){
    player.style.border = '2px solid red';
    player.style.marginBottom = '10px';
    player.style.borderRadius = '10px';
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'salmon';
    // })
}

//Both are same
/*
Note: When do we use querySelector or querySelectorAll
Ans: When we need to select a complex location. for an example: #players .player. Here we can selecet player class from players id. Otherwise we could only select the id or class(anyone).
*/
document.querySelector('#players .player:first-of-type').style.backgroundColor = 'salmon';
document.querySelector('#players .player').style.backgroundColor = 'aquamarine';

//Add New Player
function addNew(){
  const players = document.getElementById('players');
  let div = document.createElement('div');
  div.classList.add('player');
  div.innerHTML = `
  <h3>Player-New</h3>
          <p>
            Nemo, rem odio possimus temporibus laboriosam saepe corporis
            praesentium nam labore ducimus magnam officia consequatur iste quos
            fugit hic illum adipisci sed ut! Magnam perspiciatis illum deleniti
            nisi dolor dicta.
          </p>
  `
  //Change the bakcgound color with click effect
//   div.addEventListener('click', function(){
//     div.style.backgroundColor = 'salmon';
// })
  players.appendChild(div);
}
document.getElementById('players').addEventListener('click', function(event){
    // if(event.target.tagName.toLowerCase()=='div'){
    //     event.target.style.backgroundColor = 'yellow'; 
    // }
    if(event.target.className.toLowerCase() == 'player'
    ){
        event.target.style.backgroundColor = 'yellow'; 
    }
    else if(event.target.parentNode.className.toLowerCase() == 'player') {
        event.target.parentNode.
         style.backgroundColor = 'lightgreen';
    }
})