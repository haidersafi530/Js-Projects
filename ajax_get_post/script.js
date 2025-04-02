let btn = document.getElementById('btn');
let content = document.getElementById('content');
btn.addEventListener('click', runAjax);

function runAjax() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "mydata.json", true);

    xhr.onreadystatechange = function() {
        if(this.readyState==4){
                if(this.status===200){
                    console.log(this.responseText);
                    
                    let data = JSON.parse(this.responseText);
                    let el = '';
                    data.forEach(element => {
                        el+= `
                    <ul>
                        <li>${element.user}</li>
                        <li>${element.age}</li>
                        <li>${element.subject}</li>
                    </ul>
                        `
                    });

                    // let el = `
                    // <ul>
                    //     <li>${data.user}</li>
                    //     <li>${data.age}</li>
                    //     <li>${data.subject}</li>
                    // </ul>
                    // `
                    content.innerHTML = el;
                }
                else if(this.status==404){
                    content.innerText = "Page Not Found";
                }
        }
    }
    xhr.send();
}