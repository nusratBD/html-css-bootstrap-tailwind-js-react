/* 
this is accessible in method, but not in function
*/
const obj = {
    name: 'Nusrat',
    age: 25,
    study: function(){
        console.log(this.name,': ',this.age);//output: Nusrat :  25
        function versity(){
            console.log(this.name, 'is studying in self university');//   is studying in self university
        }
        versity();
    }
}
obj.study();