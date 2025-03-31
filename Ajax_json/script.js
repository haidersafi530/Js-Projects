let jsonBtn = document.getElementById('btn')
jsonBtn.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', './data/mobiles.json');
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
            let mobile = JSON.parse(data);
            console.log(mobile);
        }
    }
});
let displayJsonData = (mobile) => {
    let htmlTemplate = '';
    htmlTemplate = `<ul>
                        <li>ID : ${mobile.id}</li>
                        <li>BRAND : ${mobile.brand}</li>
                        <li>COLOR : ${mobile.color}</li>
                        <li>PRICE : ${mobile.price}</li>
                    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
}