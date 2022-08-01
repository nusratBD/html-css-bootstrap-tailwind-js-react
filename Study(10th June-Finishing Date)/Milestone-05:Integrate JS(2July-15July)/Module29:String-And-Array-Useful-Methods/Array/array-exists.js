let friends = ['Amol', 'Komol', 'Rehem', 'Sujan', 'Asim', 'Seher', 'Ifti', 'Jashim', 'Meherab', 'Meheta', 'Tania'];

function largeFriend(friends){
    if(Array.isArray(friends)==false){
        return 'Please give the correct input';
    }
    let large = friends[0];
    for(let friend of friends){
        if(friend.length>large.length){
            large = friend;
        }
    }
    return large;
}
let result = largeFriend(122345);
console.log(result);