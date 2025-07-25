let btn = document.querySelector('button');
let img = document.querySelector('img');
let url = "https://dog.ceo/api/breeds/image/random";
let sc = document.querySelector('#sc');
let er = document.querySelector('#error')

btn.addEventListener('click', function (){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        img.src = data.message;
        sc.textContent = "Image Success";

    })
    .catch(err => {
        console.log("Error Fetching Image", err);
        er.textContent = "Error Fetching Image";
    })
});