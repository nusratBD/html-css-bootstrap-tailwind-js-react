const obj = {
    name: 'Nusrat',
    study: function(){
        console.log(this);//output: Object
        console.log(this.name);//output: Nusrat(Object's property)
    }
}
obj.study();