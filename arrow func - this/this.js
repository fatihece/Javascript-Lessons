// obj.func() ---> this obj
// this ---> global object --> window (global)


/* console.log(this); // window nesnesi
console.log(this.location);
console.log(this.location.href);
console.log(window.location.href);

console.log(this === window); // true
 */
// genel konsepte this, tarayıcıda çalıştığımız için window nesnesine karşılık gelir.

// Bir fonk çağrıldığında, bağlı olarak değişen söz konusu nesne.

/* const name = "ecenaz"
console.log(name);
console.log(this.name);




// Function Declaration
function func1(){
    this.name = "fatih";
    console.log(this);
    console.log(this.location);
    console.log(this.location.href);
}


// Function Expression
const func2 = function(){
    this.age = 40;
    console.log(this);
    console.log(this.location);
    console.log(this.location.href);
}


func1() // window nesneyi gösterdi
func2()
 */
/* console.log(name);
console.log(age);
console.log(this.name);
console.log(this.age); */




