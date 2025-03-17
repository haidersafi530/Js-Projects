let get = document.getElementById('get');

async function getApi() {
    let getting = await fetch('https://official-joke-api.appspot.com/random_joke',{
        headers : {
            accept : "application/json"
        }
    });
    let joke = await getting.json();
    let data = joke.setup;
    get.innerHTML=data;
    console.log(data);
}
getApi();


// let get = document.getElementById('get');

// async function getApi() {
//     let getting = await fetch('https://official-joke-api.appspot.com/random_joke', {
//         headers: {
//             accept: "application/json"
//         }
//     });
    
//     let joke = await getting.json();
    
//     // Joke ka setup aur punchline extract kar ke p tag mein dikhayenge
//     get.innerHTML = `<p>${joke.setup} - <strong>${joke.punchline}</strong></p>`;
    
//     console.log(joke); // Console mein bhi check kar sakte hain
// }

// getApi();
