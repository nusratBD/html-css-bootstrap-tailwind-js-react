//The systax of an array function is simpler than the normal function

//normal function
// Function declaration
function greet(who) {
    return `Hello, ${who}!`;
  }
// Function expression
const greet = function(who) {
    return `Hello, ${who}`;
  }
//arrow function
const greet = (who) => {
    return `Hello, ${who}!`;
  }

