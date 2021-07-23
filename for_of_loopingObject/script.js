// for...of
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) console.log(day);


// using entries()
for (const [i, el] of days.entries()) {
    console.log(`${i+1}: ${el} day.`);
}

// optional chaninig operator (?)

// const users = [{ name: "ece", email: "hello@ece.com" }];
const users = []

if (users.length > 0) {
    console.log(users[0].name);
} else {
    console.log("user array empty");
}

console.log(users[0]?.name ?? "user array empty now");

//////////////////////////////////////////////////////////
// looping object, property names

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const properties = Object.keys(openingHours);
console.log(properties); // ["thu", "fri", "sat"]

let openStr = `We are open ${properties.length} days: `
for (const day of properties) {
    openStr += `${day}, `
};
console.log(openStr);

//////////////////////////////
// Property values

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours); // entire object, array
// console.log(entries);


// [key, value]
for (const [key, { open, close }] of entries) {
    console.log(`ON ${key} we open at ${open} and close at ${close}`);
}

// example, find the average of odds

const odds = {
    team1: 1.33,
    x: 3.25,
    team2 :6.5
}

const result = Object.values(odds)
console.log(result); // [1.33, 3.25, 6.5], gives us array of values
let average = 0;
for (const odd of result) average += odd;
console.log(average); // 11.08, we must divide the number of items
average = average / result.length;
console.log(average);


for (const [team, odd] of Object.entries(odds)) {
    console.log(team, odd);
}