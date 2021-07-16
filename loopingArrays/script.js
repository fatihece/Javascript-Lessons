//  Looping Arrays, Breaking and Continuing

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
const types = []; // empty array
  
console.log(jonas[0])
console.log(jonas[1])

console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]); // more clenar from up code
  }
console.log(types);
  
// find the ages
const years = [1991, 1988, 2001, 2012, 2023];
const ages =[] 

for (let i = 0; i < years.length; i++){
    ages.push(2021 - years[i]);
}
console.log(ages);

// continue and break statements

// break is used completely terminate the whole loop.
console.log("---ONLY STRİNGS---");
for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] !== "string") continue; // skipped the not string elements

    console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WİTH NUMBER---");
for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] === "number") break; // after the first number is found, nothing else is printed

    console.log(jonas[i], typeof jonas[i]);


}

// Looping backwards 

for (let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}

// loop in loop

for (let set = 1; set < 4; set++){
    console.log(`----------Set ${set}----Start`);
    for (let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
};
// Result on console
// script.js:68----------Set 1----Start
// script.js:70 Lifting weight repetition 1 🏋️‍♂️
// script.js:70 Lifting weight repetition 2 🏋️‍♂️
// script.js:70 Lifting weight repetition 3 🏋️‍♂️
// script.js:70 Lifting weight repetition 4 🏋️‍♂️
// script.js:70 Lifting weight repetition 5 🏋️‍♂️
// script.js:68 ----------Set 2----Start
// script.js:70 Lifting weight repetition 1 🏋️‍♂️
// script.js:70 Lifting weight repetition 2 🏋️‍♂️
// script.js:70 Lifting weight repetition 3 🏋️‍♂️
// script.js:70 Lifting weight repetition 4 🏋️‍♂️
// script.js:70 Lifting weight repetition 5 🏋️‍♂️
// script.js:68 ----------Set 3----Start
// script.js:70 Lifting weight repetition 1 🏋️‍♂️
// script.js:70 Lifting weight repetition 2 🏋️‍♂️
// script.js:70 Lifting weight repetition 3 🏋️‍♂️
// script.js:70 Lifting weight repetition 4 🏋️‍♂️
// script.js:70 Lifting weight repetition 5 🏋️‍♂️