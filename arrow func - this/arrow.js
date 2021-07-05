// ARROW FUNCTİON

/* //Function Declaration 

function square(num){
    return num * num;
}

console.log(square(4));


//Function Expression

const square2 = function(num){
    return (num * num)
}

console.log(square2(6));


//Arrow Function Expression

// const square3 = function(num){return (num * num)};
// const square3 = (num) => {return (num * num)};
const square3 = num => (num * num);
console.log(square3(8)); */

/* 
window.name = "ece";
function tellName(){
    console.log(this);
    console.log(this.name);
}

tellName();


const person = {
    name :  "gülce",
    tellName : function(){
        console.log(this);
        console.log(this.name);
    }
}

person.tellName(); 
burada this person objesine ait olduğu için name : gülce döner 0*/

/* window.name = "ece";
const tellName = () => {
    console.log(this);
    console.log(this.name);
}

tellName();


const person = {
    name :  "gülce",
    tellName : () => {
        console.log(this);
        console.log(this.name);
    }
}
person.tellName();
// arrow func kendine ait bir dizini olmadığı için this.name ifadesinde person objenin name değerini değil, window.name değerini alır. */

/* 
window.name = "ece";
const person = {
    name : "gülce",
    tellName: function(){
        console.log(this);
        console.log(this.name);

        setTimeout(function(){
            console.log(this);
            console.log(this.name);
        },2000)
    }
}

person.tellName(); */

/* 
window.name = "ece";
const person = {
    name : "gülce",
    tellName: function(){
        console.log(this);
        console.log(this.name); // gülce
// burası da arrow olsa ikisi de ece ismini verirdi.
        setTimeout(()=>{
            console.log(this);
            console.log(this.name); // gülce
        },2000)
    }
}

person.tellName();
// windows nesnesini, yani name olarak ece yi döndü. */


/* const Person = (name, surname, age) => {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname
    }
}
const person1 = new Person("John", "Doe", 40);
console.log(person1) */

/* window.year = 100;
const myObj = {
    year: 2020,
    showYear1: function() {
        console.log(this.year, this)
    },
    showYear2: () => console.log(this.year, this)
}
myObj.showYear1();
myObj.showYear2(); */

// CALL 

window.name = 'gurcan';
window.grade = 100;

// const student = {
//     examResult: () => {
//         return this.name + " " + this.grade
//     }
// }
// arrow func this i tanımaz ve window değerlerini döner.

const student = {
    examResult: function(){
        return this.name + " " + this.grade
    }
}

const student1 = {
    name: 'arin',
    grade: 80
}

const student2 = {
    name: 'elis',
    grade: 77
}

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));

