//******Function Declaration//Statement

// function declaration da fonksiyonun bir ismi olmalı
//Function statements require a function name
// console.log(square(7)); // hoisted olarak çalışır



// function square(num) { // num: parametre
//     return (num*num)
// } 

// square(5);
// console.log(square(5)); // 5: argüman 
// console.log(square); // square isimli fonk bana print et
// console.log(4); // () --> invoke)


//function declaration --> HOISTED
// HOISTED : fonksiyon declaration üstünde de çalışabilir olması demek.fonsiyon tanımlamadan da çalıştırabiliyoruz demek
// Örn: 4.jine--console.log(square(7)); yukarıda çalışır durumda


/*******Function Expression************/

/* En kısa taarifle; Eğer biz function declarationu bir değişkene atıyorsak, func expression oluşturuyoruz demek */

// const square = function(num) {
//     return (num*num)
// }

// func name is optional. Genelde kullanmayız

// console.log(square); // func nın kendisini verdi

// console.log(square()); // invoke ettik, argüman vermedik ama.bize NaN döndü. 

// console.log(square(5)); //25

// FIRST CLASS FUNCTİONS ---> variable a atanan fonksiyona diyoruz
// bize avantajı : fonksiyona bir değişken gibi davranabiliriz.
/* 
const myArr = [6, "ece", function() {console.log("Array Element");}]


myArr[2](); // Array Element çıktısı aldık. 


const myObj = {
    age:5,
    name : "ece",
    func: function() {console.log("Object Element");}
}

myObj.func(); // Object Element


console.log(20 + (function() {return 10;})()); // IIFE 30 */

// square(5); // error, not hoisted
/* const square = function(num) {
    return (num*num)
} */

// Function Expression is not HOISTED
// Function Expression can be ananymous (I dont have to give a function name)

// First - Class Functions Devam
// Bir fonksiyonu bir başka bir fonksiyona argüman olarak alabiliriz.


/* const addFive = function (num, func) {
    console.log(10 + func());
 }

 addFive(10, function(){ return 5; }) // 15 */


/*  const myFunc = function (num){
     return function toDouble(){
         console.log(num*2);
     }
 }
 */
//  myFunc(3)();

// console.log(myFunc(5)()); // 10, undefined da verir. iki kere console.log yapıldığı için

// myFunc(4)(); // 8

// myFunc(4) sonuç çıkmaz. Bİze içerdeki fonksiyonu verir. içerdeki fonksiyonu da çağırmamız gerekiyor. Bu yüzden myFunc(4)() şeklinde içerdeki fonksiyonu da invoke etmeliyiz. 
// myFunc()(4) yazarsak da çalışmaz. Çünkü parametreyi ilk fonsiyona yazmalıyız
// myFunc(4)()
// myFunc(5)()

// const result = myFunc(7);

// result(); 


// IIFE 
// Immediately Invocable Function Expression

/* (function(){
    console.log(5 + 12);
})() */

/* func statment ı parantez içine aldık, sonra invoke ettik. 
Fonksiyon çalıştı ve bitti. 
Parantez içine almazsan "function statements require a function name hatası verir. */

// Hemen hemen herşey gibi fonsiyonlar da birer nesnedir.

/* function multi(num1, num2){
    retun (num1*num2)
}

console.log(multi.name); // fonk adını verdi : multi
console.log(multi.length); // 2 : parametre sayısı */