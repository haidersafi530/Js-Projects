// async function getData() {
//     setTimeout(function(){
//         console.log("im inside set time out");
//     },3000)
// }
// let output = getData();

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json();
    console.log(data);
}
getData();