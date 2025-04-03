let usern = document.getElementById('username');
let pass = document .getElementById("password");




let btn = document.getElementById('btn-submit');
btn.addEventListener("click", insertData);
function insertData()
{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'crud.php?', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if(this.readyState==3){
            //loader code 
        }


        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let data = Number(this.responseText);
            if(data==1){
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
