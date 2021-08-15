//---------------1--------------
// forEach --------------(dont use with objects)
// const numbers = [1, 3, 5, 9, 7, 10]
// numbers.forEach((number) => console.log(number *5))



// with callback function
// function printNumbers(num) {
//     console.log(num * 5);
// }
// numbers.forEach(printNumbers);


// numbers.forEach((number, index)=> console.log("index:", index, "number * 2:", number * 2))






//-----------------2----------------
// -------map method (return array)--
// const numbers = [1, 3, 5, 9, 7, 10]
// console.log(numbers.map(n => { return n * 5 }));
//[5, 15, 25, 45, 35, 50]


// const myArray = numbers.map(n => { return n * 5 })
// console.log(myArray)

// const myArray2 = numbers.forEach(n => { return n * 5 }); // undefined
// console.log(myArray2)
// we dont get value with foreach. 
// const myArray3 = numbers.forEach(n => { console.log(n*5) });





// map vs forEach

// let users = [
//     { id: 0, fname: "fatih", lname: "ece", salary: 1000 },
//     { id: 1, fname: "can", lname: "ece", salary: 1200 },
//     { id: 2, fname: "serkan", lname: "ece", salary: 1300 },
//     { id: 3, fname: "ayse", lname: "ece", salary: 1500 },
//     { id: 4, fname: "pelin", lname: "ece", salary: 2500 }
// ]

//task: create an array from salary and increase the prices by %100

//forEach
// const salary2 = [];

// users.forEach(item => {
//     salary2.push(item.salary*2)
// })
// console.log(salary2);





// ----------map-----------------

// const newSalary = users.map(item => item.salary * 2);
// console.log(newSalary);

// --------find method (just turn one value not multiple)

// let users = [
//         { id: 0, fname: "fatih", lname: "ece", salary: 1000 },
//         { id: 1, fname: "can", lname: "ece", salary: 1200 },
//         { id: 2, fname: "serkan", lname: "ece", salary: 1300 },
//         { id: 3, fname: "ayse", lname: "ece", salary: 1500 },
//         { id: 4, fname: "pelin", lname: "ece", salary: 2500 }
// ]

// task: get the object which has the salary : 1300 

// const myUser = users.find( user => user.salary == 1300);
// console.log(myUser);

// const myUser2 = users.find( user => user.fname == "fatih");
// console.log(myUser2);

// const myUser3 = users.find( user => user.salary < 1300);
// console.log(myUser3);






//---------------filter--------------
// turns more thwn onr value if the results suit the condition.
// let users = [{
//         id: 0,
//         fname: "fatih",
//         lname: "ece",
//         salary: 1000
//     },
//     {
//         id: 1,
//         fname: "can",
//         lname: "ece",
//         salary: 1200
//     },
//     {
//         id: 2,
//         fname: "serkan",
//         lname: "ece",
//         salary: 1300
//     },
//     {
//         id: 3,
//         fname: "ayse",
//         lname: "ece",
//         salary: 1500
//     },
//     {
//         id: 4,
//         fname: "pelin",
//         lname: "ece",
//         salary: 2500
//     }
// ]

// const myUsers = users.filter((user) => user.salary < 1300);
// console.log(myUsers)


// --------------reduce---------------

// const myArray = [1, 3, 5, 6, 8];
// const total = myArray.reduce((acc, curr) => {
//     console.log("acc:", acc, "curr:", curr)
//     return acc + curr;
// });
// console.log(total)

// find the largest number in array

// const numbers = [9, 5, 2, 1, 77, 23, 24, 65];

// const largeNumber = numbers.reduce((prev, curr) => {
//     return prev > curr ? prev : curr
// })
// console.log(largeNumber);



// -----------for in------------
// const lady = {
//     id: 4,
//     fname: "pelin",
//     lname: "ece",
//     salary: 2500
// }

// lady.forEach(element => console.log(element));
// lady.forEach is not a function, we cant use forEach method with objects.


// for (let key in lady) {
//     console.log("key:", key)
//     console.log("key:", lady[key])
// }

//------------ for of ------------------

let users = [
        { id: 0, fname: "fatih", lname: "ece", salary: 1000 },
        { id: 1, fname: "can", lname: "ece", salary: 1200 },
        { id: 2, fname: "serkan", lname: "ece", salary: 1300 },{ id: 3, fname: "ayse", lname: "ece", salary: 1500 },
        { id: 4, fname: "pelin", lname: "ece", salary: 2500 }
]
    
for (const element of users) {
    console.log(element["fname"])
    console.log(element.salary)
};

