const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
   ];
  const x = players.map((player)=>player.name.firstName);
  console.log(x);
// function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]))
// const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
// const{price}=product;
// console.log(price);
// const person=[ {singer:'Atif aslam', address:'23 something street'}]
// console.log(person[0].address);
// const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

// console.log(player.name.firstName);