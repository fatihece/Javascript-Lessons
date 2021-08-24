const books = [
    {name: "Martin Eden", author: "Jack London"},
    {name: "Papillon", author: "Henri Charier"},
    {name: "Turkiye'de Çağdaşlaşma", author:"Niyazi Berkes"}
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
} 


/* const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
} */

/* const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        //resolve(books)
        reject()
    })
    return promise1
} */

//addNewBook({name: "Berlin Hatıralarım", author: "Hüsrev Gerede"}, listBooks);

/* addNewBook({name: "Berlin Hatıralarım", author: "Hüsrev Gerede"})
.then(()=> {
    console.log('Yeni List');
    listBooks();
}).catch(()=> {
    console.log('HATA ALDIK 2')
}) */

const addTwoNumbers = (num1, num2) => {
    const promise2 = new Promise((resolve, reject) => {
        const sum = num1 + num2;
        (typeof num1 !== 'number' || typeof num2 !== 'number')
        ? reject('PLEASE ENTER NUMBER!!!')
        : resolve(sum)
    })
    return promise2
}

addTwoNumbers(4,'8')
.then((value) => {
    console.log('TOTAL: ', value)
})
.catch((reason) => {
    console.log('ERROR: ', reason)
})