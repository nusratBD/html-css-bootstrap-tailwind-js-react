const student ={'id':101, 'name':'Nusrat Hurain', 'department':'CSE', 'profession':'Software Engineer', 'income':'5000000000', 'country':'Bangladesh', 'next-project':'Soil Electricity'}
const {name, profession, country}=student;
// console.log(name, country);
const scientist ={
    id:101,
    name:'Nusrat Hurain',
    country:'Bangladesh',
    email:'nusrat.hurain15@gmail.com',
    details:{
        Currentprofession:'Software Engineer',
        CurrentCompany: 'Google',
        popularProject: 'Soil Electricity'
    },
    personalInfo:{
        hobby: 'Cooking',
        passion: 'Software Development',
        goal:'Serve for humanity'
    }
}
const {goal, passion, hobby} = scientist.personalInfo;
// const {Currentprofession, CurrentCompany, popularProject}=scientist.details;
const {Currentprofession, CurrentCompany, popularProject}=scientist.details;
console.log(goal, passion, hobby);
console.log( Currentprofession, CurrentCompany, popularProject);
