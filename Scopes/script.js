"use strict"
// Scoping in Practice


function calcAge(birthYear) {
  const age = 2021 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // firstName : global scope. it can be used
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {  // if statment {} is a block scope
      var millenial = true; // 
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'; // JS tries to look for the variable name in the current scope
        
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!'; // we redefine the variable
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // str is not defined. it is block scope. İt is available only in a block which they were created
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}
// console.log(age); // age is not defined. it is in function, not global scope
const firstName = 'Jonas'; // global scope
calcAge(1991); // global scope
// console.log(age);
// printAge();

// we dont have access to any variables defined in a scope


