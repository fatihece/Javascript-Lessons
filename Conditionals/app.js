// first example

/* var num = 5;
if(num > 0){
    console.log("The number is positive");
} else if (num < 0){
    console.log("The number is negative")
} else console.log("The number is zero.") */

/******************************************************/


/* var num = prompt("Enter a number!!!");
if(num > 0){
    alert("The number is positive");
} else if (num < 0){
    alert("The number is negative")
} else alert("The number is zero.") */

/*****************************************************/

/* var isRaining = prompt("Is it raining?");

if (isRaining === "yes"){ // we must use ==/===, not =
    alert("Go take an umbrella");
} else {
    alert("Thats ok. You don't need anything");
}
 */

/****************************************************/

// && : (and), || : (or), ! (not)

var name = "john";
var age = 20;
var highSchool = true;

//job at google
//job requirements : over 18 and high scholl degree

if (age >= 18 && highSchool === true){
    alert("You are applicaple for this job")
} else{
    alert("You are not conveinent for the job")
}