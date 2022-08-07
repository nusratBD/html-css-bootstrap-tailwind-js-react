class SportsTeam{
    class = 7;
    players;
    coach;
    constructor(players, coach){
        this.players = players;
        this.coach = coach;
    }
}
class Football extends SportsTeam{
    /*When there is any new property in the child class, we must do the followinf steps:
    1. declare the property name. here property is matchWin.
    2. declare the constructor
    3. add all the properties of parent class(here SportsTeam) and child class(Football) inside the first braket () of constructor. Ex: constructor(players, coach, matchWin)
    4. declare super with parent class property. Ex: super(players, coach);
    5. access the child class property
    */
    matchWin;//Football class property
    constructor(players, coach, matchWin)/*players, coach =>parent class(SportsTeam) property. matchWin =>child class(Football) property. As matchWin it is parameter here, it can be any name insted of matchWinn. Ex:
        constructor(players, coach, win)
        super(players, coach);
        this.matchWin = win;
    */
    {
        super(players, coach);// players, coach=>parent class 
        this.matchWin = matchWin;// access child class property
    }
    football(){
        console.log('Class',this.class, 'football team has', this.players, 'players.', 'There instructor is ',this.coach,'. They won', this.matchWin, 'matches.');
}
}
let footballTeam = new Football(11, 'Joy Desh', 3);
console.log(footballTeam);//It got the properties from SportsTeam(parent) class
footballTeam.football();