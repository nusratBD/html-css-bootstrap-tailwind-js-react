const obj = {
    name: 'Nusrat',
    age: 25,
    study: function(){
        console.log(this.name,': ',this.age);
        const versity = () =>{
            console.log(this.name, 'is studying in self university');//output: Nusrat is studying in self university
        }
        versity.bind(this);
        versity();
    }
}
obj.study();

// More Examples:
const student = {
    dpt: 'CSE',
    major: 'Software'
}
function description(){
    console.log(this.major, 'is the the major of ',this.dpt,'students');//Software is the the major of  CSE students
}
const bind = description.bind(student);
bind();