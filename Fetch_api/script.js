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

const btn = document.querySelector("#btn");
const URL = "https://dog.ceo/api/breeds/image/random";

const getFacts = async () => {
    try{
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);

        let imgElement = document.getElementById('dogImage');
        imgElement.src = data.message;
    }
    catch (error) {
        console.log("Error fetching data", error);
    }
};
getFacts();


