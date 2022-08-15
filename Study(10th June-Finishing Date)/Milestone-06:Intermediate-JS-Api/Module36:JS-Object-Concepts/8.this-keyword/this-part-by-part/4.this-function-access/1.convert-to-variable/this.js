const obj = {
    name: 'Nusrat',
    age: 25,
    study: function(){
        console.log(this.name,': ', this.age);//output: Nusrat :  25
        const name = this.name;//object property is converted in a variable
        function versity(){
            console.log(name,' is studying at self university.');//output: Nusrat  is studying at self university.
        }
        versity();
    }
}
obj.study();