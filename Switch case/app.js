// if else yapıları
// let score = 50;
// if (score >= 50){
//     console.log("Congrulations");
// }

// let score =85
// if (score >=50) console.log("Congrulations2");

// if (score>80){
//     console.log("Tebrikler")
// }else{
//     console.log("Daha çok çalışmalısın")
// }

// ----------Ternary İf / Kısa yol-----------
// score > 80 ?  console.log("Tebrikler") :  console.log("Daha çok çalışmalısın");
// ? if : else i temsil ediyor
/* 
let score = 25;
if (score>80){
        console.log("Tebrikler")
 }else if (score>=50){
     console.log("Çalışmaya devam et...")
 }else{
     console.log("Daha çok çalışmalısın dostum")
 }

 console.log("if else çok kolay") 
 */


/* 
----------notu kullanıcıdan al---------------

let score = prompt("Sınav notun kaç?");
if (score>80){
        console.log("Tebrikler")
 }else if (score>=50){
     console.log("Çalışmaya devam et...")
 }else{
     console.log("Daha çok çalışmalısın dostum")
 }

 */
 
/* 
 let userName = "Fatih";

 userName ? console.log(`Hello ${userName}`) : console.log("Please login.") */

 

/* 
--------------Terneray İf-Else yapısı---------------------
// condition ? trueOutput : secondCondition ? output1 : output2 
 let score = 85;
 score > 80 ? console.log("Congratulate"): score>= 50 ? console.log("Not bad but you should study"): console.log("Study hard!"); 

 */
 


//--------------Switch  statement-------------

// var text;
// var fruits = "OraNge"; // ===
// fruits = fruits.toLowerCase(); // hepsini küçk yazdık, kullanıcı ne girerse girsin kendi sistemimize entegre ettik.

// switch (fruits){ // switch (fruits.toLowerCase())
//     case "lemon":
//         text = "Banana is good"
//     break;
//     case "lemon":
//     case "orange":
//         text = "I am not a fan of orange."
//         break;
//     case "apple":
//         text = "How you like the apples"
//         break;
//     default:
//         text = "I have never heard of that fruit..."     
// }

// console.log(text);
// console.log(fruits, ":", text);


 // toLowerCase()


 // Bir gün değişkeni belirle.
 //switch case pzt- çarş- perş-cmt in class.
 //salı ve cuma günleri TW var.

/* var text;
var day= "Pazar" ;
day = day.toLowerCase(); 

switch (day){ 
    case "pazartesi": 
    case "çarşamba": 
    case "perşembe": 
    case "cumartesi":
        text = "Bugün inclass var"
        break;
    case "salı":
    case "cuma":
        text = "TW günü"
        break;
    case "pazar":
        text = "Bugün dinlenme zamanı"
        break;
    default:
        text = "Yanlış değer girdiniz."     
}
console.log(text); */


// let age = 440;

// age < 18 ? console.log("This is İF side") : age >= 40 ? console.log("You are in Elif Else") : age >=18 ? console.log("You re in second ELİF ELSe") : console.log("old man, welcom else")



// const a = "Fatih";

// switch(a){
//     case "Fati":
//         console.log("sonuç : " + a);
//         break
//         case "Fatih":
//             console.log("Sonuç : " + a);
//             break;

//             default:
//                 console.log("Sonuç bulunamadı");
//                 break;
// }


// var firstName="Fatti"

// switch(firstName){
//     case "Fato":
//         console.log("try again"); 
//         break;
//     case "Fatti" :
//         console.log("nice try, keep try on"); 
//         break;
//     case "Fatih" :
//         console.log("Correct, did right"); 
//     default:
//         result = "you should return first-line"           
// }

// // console.log("result");

let tarih = new Date().getDay();

switch(tarih){
 
    case 0:
        console.log("pazar");
        break;
    case 1:
        console.log("pazartesi");
        break;
    case 2:
        console.log("salı");
        break;
    case 3:
        console.log("çarşamba");
        break;
    case 4:
        console.log("perşembe");
        break;
    case 5:
        console.log("cuma");
        break;
    case 6:
        console.log("cumartesi");
        break;
    default:
        console.log("Böyle bir gün yok")
}
 


/* let animal =prompt("Your favorite animall...");
switch(animal){
    case "cow":
    case "dog":
    case "cat":
        console.log("These animals so cute");
        break
    case "lion":
        console.log("King of the forest")
        break
    default:
        console.log("these animals are wild");
        break
} */