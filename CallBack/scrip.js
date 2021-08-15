// function userInput() {
//     let firstName = prompt("Please enter your name: ");
//     alert("Hello " + firstName);
// }

// userInput();


// function userInput() {
//     let firstName = prompt("Please enter your name: ");
//     console.log("Hello " + firstName);
// }

// userInput();


function greetingAlert(firstName) {
    alert("Hello " + firstName + " how are you!!");
}

function greetingConsole(firstName) {
    console.log("Hello " + firstName);
}

function anotherFunc(firstName) {
    let lastName = prompt("Enter your last nane: ")
    alert("Hi " + firstName + " " + lastName)
}


function UserInput(callback) {
    let firstName = prompt("please enter your name");
    callback(firstName);
}

// UserInput(greetingAlert);
// UserInput(greetingConsole)
// anotherFunc("ali")
// UserInput(anotherFunc);


let users = [
    { id: 0, fname: "fatih", lname: "ece", salary: 1000 },
    { id: 1, fname: "can", lname: "ece", salary: 1200 },
    { id: 2, fname: "serkan", lname: "ece", salary: 1300 },
    { id: 3, fname: "ayse", lname: "ece", salary: 1500 },
    { id: 4, fname: "pelin", lname: "ece", salary: 2500 }
]

function iterateUSers(myCB) {
    users.forEach( user => myCB(user));
}

//-------------total salary-----------
let totalSalary = 0;
function findTotalSalary(user) {
    totalSalary += user.salary;
}

iterateUSers(findTotalSalary);
console.log("total salary: ", totalSalary)



//-----------user name array------------
let userNames = [];

function fillUserNames(user) {
    userNames.push(user.fname);
};

iterateUSers(fillUserNames);
console.log("User Names: ", userNames)


//---------- get full name --------------
let fullnameList =  []
function getFullName(user) {
    fullnameList.push(user.fname + " " + user.lname)
}

iterateUSers(getFullName);
console.log("Full name list: ", fullnameList)

//------------ calculate ----------------

function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
}


function calculatesum(num1,num2) {
    return num1 + num2;
}

console.log(calculate(200, 450, calculatesum));


//----------mulitply-------------
function calcaulateMultiply(num1, num2) {
    return num1 * num2;
}

console.log(calculate(5, 7, calcaulateMultiply));
console.log(calculate(10, 9, calcaulateMultiply));
console.log(calculate(21, 45, calculatesum));





