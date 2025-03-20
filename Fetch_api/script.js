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
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("could not fetch resourse");
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));


