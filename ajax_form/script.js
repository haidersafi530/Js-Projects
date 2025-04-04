let tbody = document.getElementById('tbody');

let usern = document.getElementById('username');
let pass = document .getElementById("password");


let btn = document.getElementById('btn-submit');
btn.addEventListener("click", deleteData);
function insertData()
{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'crud.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if(this.readyState==3){
            //loader code 
        }


        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let data = Number(this.responseText);
            if(data==1){
                selectData();
                alert("Data inserted");
            }
            else{
                alert("server issue");
            }
        }
    }
    xhr.send('username='+ usern.value + "&password=" + pass.value + "&insertData");
    usern.value = "";
    pass.value = "";
}

function selectData()
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'crud.php?selectData', true);

    xhr.onreadystatechange = function (){
        if(this.readyState===4 && this.status==200){
            if(this.responseText=="0"){
                alert('server down issue ot fetch data ');
            }
            else{
                tbody.innerHTML = this.responseText;
            }
        }
    }
    xhr.send();
}
window.onload = selectData();


function updateData()
{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'crud.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if(this.readyState==3){
            //loader code 
        }


        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let data = Number(this.responseText);
            if(data==1){
                selectData();
                alert("data updated");
            }
            else{
                alert("server issue");
            }
        }
    }
    xhr.send('username='+ usern.value + "&password=" + pass.value + "&updateData");
    usern.value = "";
    pass.value = "";
}   


function deleteData()
{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'crud.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if(this.readyState==3){
            //loader code 
        }


        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let data = Number(this.responseText);
            if(data==1){
                selectData();
                alert("data deleted");
            }
            else{
                alert("server issue");
            }
        }
    }
    xhr.send("deleteData");
    usern.value = "";
    pass.value = "";
}   





