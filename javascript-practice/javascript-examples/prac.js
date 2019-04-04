/* initializing a variable before
declaration */
name = "John";

/* Hoisting does not apply to 
ES6 variable declaration */
let name;

console.log(name);
/* Error: can't access lexical
declaration `name' before initialization */