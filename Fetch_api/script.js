// async function getData() {
//     setTimeout(function(){
//         console.log("im inside set time out");
//     },3000)
// }
// let output = getData();

// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await response.json();
//     console.log(data);
// }
// getData();

// async function  getData() {
//     let response = await fetch('')
//     let data = await response.json();
//     console.log(data);
// }
// getData();
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("could not fetch resourse");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));

// const URL = "https://dog.ceo/api/breeds/image/random";


// const getFacts = async () => {
//     let response = await fetch(URL);
//     console.log(response)
// } 


// const URL = "https://dog.ceo/api/breeds/image/random";
// const getFacts = async () => {
//     try{
//         let response = await fetch(URL);
//         let data = await response.json();
//         console.log(data);
//         console.log(data.message);
//     }
//     catch (error) {
//         console.error("Erorr Fetching Data", error);
//     }
// }
// getFacts();


// const URL = "https://dog.ceo/api/breeds/image/random";

// const getFacts = async () => {
//     try {
//         let response = await fetch(URL);
//         let data = await response.json(); // Parse the JSON response
//         console.log(data); // Log the data object
//         console.log(data.message); // Log the image URL
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };

// getFacts(); // Call the function to test it

// const URL = "https://dog.ceo/api/breeds/image/random";
// const btn = document.getElementById('btn');
// const img = document.getElementById('img');

// const getData = async () => {
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//     console.log(data.message);

//     btn.addEventListener('click', getData);
    
// }

// getData();

// const URL = 'https://dog.ceo/api/breeds/image/random';
// const getFacts = async () => {
//     console.log('getting data from ....');
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data.message);

//     let img = document.getElementById('img');
//     img.setAttribute('src', data.message);

//     let btn = document.getElementById('btn');
//     btn.addEventListener('click', getFacts);

//     let p = document.getElementById('p');
//     p.textContent = data.message;

// }
// getFacts(); 

// const URL = 'https://dog.ceo/api/breeds/image/random';
// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();

//     }).then((data) => {
//         console.log(data);
//         let p = document.getElementById('p');
//         p.textContent = data.message;
//     })
// };
//     let btn = document.getElementById('btn');
//     btn.addEventListener('click', getFacts);


// const URL = 'https://dog.ceo/api/breeds/image/random';

// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         let p = document.getElementById('p');
//         p.innerText = data.message;

//         let btn = document.getElementById('btn');
//         btn.addEventListener('click', getFacts);
//     })
// };
// getFacts();

// let arr = new Array();
// let ar = [];

// let fruit = ["apple", "orange", "plum"];
// alert(fruit[0]);
// alert(fruit[1]);

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

alert(fruits.length);






