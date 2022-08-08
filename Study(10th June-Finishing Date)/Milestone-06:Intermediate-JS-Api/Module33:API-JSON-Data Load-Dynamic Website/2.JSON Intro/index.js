//JSO: Javascript Object
let user = {
    id: 170515,
    name: 'Nusrat Hurain',
    home: 'Lakshmipur'
}
console.log(user);//output: { id: 170515, name: 'Nusrat Hurain', home: 'Lakshmipur' }
//JSON: Javascript Object Notation
let jsonUser = JSON.stringify(user);
console.log(jsonUser);//output: {"id":170515,"name":"Nusrat Hurain","home":"Lakshmipur"}

