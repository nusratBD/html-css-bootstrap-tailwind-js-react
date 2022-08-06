/*
Destructuring: To get the value of several properties unitedly of an object is called destructuring.
*/
let mySelf = {
    name: 'Nusrat Hurain',
    age: 25,
    profession: 'Software Engineer',
    salary: 50000000,
    personality: 'Service Oriented'
}
// Method 01
console.log(mySelf.salary);
// Method 02
const prof = mySelf.profession;
const characterstics = mySelf.personality;
console.log(prof, characterstics);
// Method 03: Destructuring Method
let { name, age} = mySelf;
console.log(name);
//Method 04: Complex Destructuring
let company = {
    name: 'Google',
    ceo: {
        name: 'Sundar Pichai',
        country: 'India',
        age: 50
    },
    employee: 100000,
    web: {
        fontend: 'JS',
        backend: 'Python',
        framework: 'Laravel'
    }
}
let {framework, fontend, backend} = company.web;
console.log(backend, framework);
//Method 05: More Complex Destructuring
let company2 = {
    name: 'Google',
    services: {
        web: {
            frontend: 'JS',
            frontFrame: 'React',
            back: 'PHP',
            backendFrame: 'Laravel'
        },
        app: {
            frontend: 'JS',
            fontFrame: 'VUE',
            back: 'Java'
        },
        robot: {
            language: 'python',
            framework: 'Django'
        },
        browser: 'Google Chrome'
    },
    ceo:{
        name: 'Sundar Pichai',
        country: 'India'
    }
}
const {frontend, frontFrame, back} = company2.services.app;
console.log(back);