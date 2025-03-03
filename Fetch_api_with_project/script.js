
const URL = "https://dog.ceo/api/breeds/image/random";
const dataP = document.querySelector('#data'); // Ensure this is an <img> tag or a valid container
const getDATA = document.querySelector('#getdata');
const box = document.querySelector('#box');

const getAPI = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    box.innerHTML = `<img src="${data.message}" alt="Random Dog"/>`;    
};

getDATA.addEventListener('click', getAPI);


