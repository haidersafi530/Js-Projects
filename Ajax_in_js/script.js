let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "./data/readme.txt", true)
    xhr.send()

    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
            displayText(data);
        }
    }
});

let displayText = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
}