
// this keyword with regular function
// console.log(this); // global object

// const calcAge = function (birthyear) {
//     console.log(2021 - birthyear);
//     console.log(this);
// }
// calcAge(1998)

// arrow func
// const calcAgeArrow = birthyear => {
//     console.log(2021 - birthyear);
//     console.log(this);
// }
// calcAgeArrow(1998)


// with object
// const ece = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2021 - this.year);
//     }
// }

// ece.calcAge(1991)


/// the spread operator 

// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badArr);

// const newArr = [1, 2, ...arr]
// console.log(newArr);
// console.log(...newArr); // 1 2 7 8 9


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);


// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Galatasaray';
const letters = [...str, ' ', 'GS.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Naz`);


// Real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];
console.log(ingredients);
