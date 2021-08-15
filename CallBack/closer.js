// let myGlobal = "I am global variable"

// function showCloser() {
//     let myFirstVar = "I am inside the outer function"
//     console.log(myGlobal, "\n", myFirstVar)
    
//     function innerFunction() {
//         let myInnerVar = "I am inner variable"
//         console.log("These are inner function variables 👇")
//         console.log(myGlobal)
//         console.log(myFirstVar)
//         console.log(myInnerVar)
//     }

//     innerFunction();
// }

// showCloser()

//------------------------

// function makeAdder(x) {
//     return function (y) {
//         return x+ y
//     }
// }

// let add10 = makeAdder(10);
// console.log(add10(8))
// console.log(makeAdder(10)(5))


// //----multiply-------
// function multiply(x) {
//     return function (y) {
//         return x*y
//     }
// }

// console.log(multiply(10)(5))

// const multi5 = multiply(5);
// console.log(multi5(6))


// let counter = 0;

// function add() {
//     counter += 1;
//     return counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// function byMistake() {
//     counter = 11
// }

// byMistake();

// console.log(add())
// console.log(add())


// let addCounter = function () {
//     counter = 0;

//     return function () {
//         counter += 1;
//         return counter;
//     }
// };

// const add = addCounter();

// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())

// console.log(addCounter()());





function fontSize(size) {
    return function () {
        document.querySelector("p").style.fontSize = size + "px";
    }
}


const fs24 = fontSize(24);
const fs32 = fontSize(32);
const fs48 = fontSize(48);


document.getElementById("btn24").addEventListener("click", fs24);
document.getElementById("btn32").addEventListener("click", fs32);
document.getElementById("btn48").addEventListener("click", fs48);



