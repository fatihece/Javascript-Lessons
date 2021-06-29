//--------------First Solution------------------

// for(let i = 1; i<=100; i++ ){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i, "FizzBuzz");
//     }else if (i%3 === 0){
//         console.log(i, "Fizz");
//     }else if(i%5 === 0){
//         console.log(i, "Buzz");
//     }else{
//         console.log(i);
//     }
// }

//----------------Second Solution-------------------

for(let i = 1; i<=100; i++ ){
    console.log(`${i} ${i%3 === 0 && "Fizz" || ""}${i%5 ===0 && "Buzz" || ""} `)
}