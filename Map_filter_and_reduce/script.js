// const coding = ["js","react","java","python","cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item;
// })
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums =  myNums.filter( (num) => num > 4)
// console.log(newNums);

// let newNums = myNums.filter( (num) => {
//     return num > 4;
// })
// console.log(newNums);



// const newNums = [];
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums)

// const books = [
//     { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", publish: 1988, edition: "25th Anniversary" },
//     { title: "Atomic Habits", author: "James Clear", genre: "Self-help", publish: 2018, edition: "1st Edition" },
//     { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Self-help", publish: 1997, edition: "20th Anniversary" },
//     { title: "The Power of Now", author: "Eckhart Tolle", genre: "Spirituality", publish: 1997, edition: "1st Edition" },
//     { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-help", publish: 2016, edition: "1st Edition" },
//     { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Psychology", publish: 2011, edition: "1st Edition" },
//     { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", publish: 2011, edition: "1st Edition" },
//     { title: "The 48 Laws of Power", author: "Robert Greene", genre: "Business", publish: 1998, edition: "1st Edition" },
//     { title: "Deep Work", author: "Cal Newport", genre: "Productivity", publish: 2016, edition: "1st Edition" },
//     { title: "Zero to One", author: "Peter Thiel", genre: "Business", publish: 2014, edition: "1st Edition" }
// ];

// let userBooks = books.filter( (bk) => bk.genre === "Business");

// userBooks = books.filter( (bk) => { return bk.publish >= 2000 && bk.genre === "Business"} );

// console.log(userBooks);


//MAP
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const newNums = myNumbers.map( (num) => {return num + 10});

// //CHANINIG

// // const newNums = myNumbers.map((num) => num * 10).map((num) => num + 5).filter((num) => {return num >= 40});

// console.log(newNums);

// const myNums = [1,2,3];
// // const myTotal = myNums.reduce (function(acc, currval){   
// //     console.log(`acc : ${acc} and currval : ${currval}`);
// //     return acc + currval;
// // }, 0)

// const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemname : "Js Course",
        price : 3000
    },
    {
        itemname : "PHP Course",
        price : 3300
    },
    {
        itemname : "Python Course",
        price : 4000
    },
    {
        itemname : "DSA Course",
        price : 5000
    },

]

const pricetoPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0);

console.log(pricetoPay);


