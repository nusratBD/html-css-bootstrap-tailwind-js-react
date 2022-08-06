//If there is any error in nested object variable, optional chaining(?) handles it providing undefined output instead of error.
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
// console.log(company2.service.app.backendFrame);//output: error
// console.log(company2.services?.apps?.backendFrame);//output: undefined
// console.log(company?.services?.apps?.backendFrame);//output: error. reason: Although we used optional chaining(?), our main variable(company) is wrong. So we must write the main variable correctly 
// console.log(company2?.services?.apps?.backendFrame)//output: undefined
// console.log(company2?.service?.app?.backendFrame)//output: undefined
console.log(company2?.services?.app?.back)//output: back