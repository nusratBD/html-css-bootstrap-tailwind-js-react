/*
Inheritance: Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more. Using class inheritance, a class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability.
*/
class SportsTeam{
    class = 7;
    players;
    coach;
    constructor(players, coach){
        this.players = players;
        this.coach = coach;
    }
}
class Cricket extends SportsTeam{
cricket(){
    console.log('Class',this.class, 'cricket team has', this.players, 'players', 'There instructor is',this.coach,'.');
}
}

class Football extends SportsTeam{
    football(){
        console.log('Class',this.class, 'football team has', this.players, 'players', 'There instructor is',this.coach,'.');
}
    }


let cricketTeam = new Cricket(12, 'Jeme Sydense');
console.log(cricketTeam);//It got the properties from SportsTeam(parent) class
cricketTeam.cricket();

let footballTeam = new Football(11, 'Joy Desh');
console.log(footballTeam);//It got the properties from SportsTeam(parent) class
footballTeam.football();
