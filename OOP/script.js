// constructor function (think like a blueprint of a house)
// const Person = function (firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never to this, Do not do
//     // this.calcAge = function () {
//     //     console.log(2021 - this.birthYear);
//     // }
// }

// // actual house in the real world (created through blueprint)
// const fatih = new Person("Fatih", 1988);
// console.log(fatih);
// // Person {firstName: "Fatih", birthYear: 1988}

// const ece = new Person("Ece", 2014);
// const gülce = new Person("Gülce", 2018);
// console.log(ece, gülce);
// // ece and gülce instance of Person

// console.log(ece instanceof Person); // true


// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2021 - this.birthYear);

// };

// fatih.calcAge();
// ece.calcAge();

// // use __proto__ with instance, prototype with constructor
// console.log(fatih.__proto__);
// console.log(Person.prototype);
// console.log(fatih.__proto__ === Person.prototype); // true


// console.log(Person.prototype.isPrototypeOf(fatih)); // true

// Person.prototype.team = "Galatasaray";
// console.log(fatih.team);

// console.log(fatih.hasOwnProperty("firstName")); // true

// console.log(fatih.__proto__.__proto__);


// // Coding Challenge
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };


// // Methods (function)
// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going to ${this.speed}km/h`);
// }
// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going to ${this.speed}km/h`);
// }

// const Car1 = new Car("BMW", 120)
// const Car2 = new Car("Mercedes", 95)


// Car2.accelerate();
// Car1.accelerate();
// Car1.brake();
// Car1.accelerate();


// // Classes

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2021 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.firstName}`);
//     }

// }

// const pınar = new PersonCl("Pınar", 1990);
// console.log(pınar);
// pınar.greet()
// pınar.calcAge();

// PersonCl.prototype.welcome = function () {
//     console.log(`Welcome ${this.firstName}`);
// }

// pınar.welcome();



// 1. Classes are not hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

