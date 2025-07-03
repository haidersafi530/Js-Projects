let validUser = "haider";
let validPass = "haider";

document.getElementById("loginBtn").addEventListener('click', function(){
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if(user === validUser && pass === validPass){
        document.getElementById('message').innerHTML = "Login Success";
        document.getElementById('message').style.color = "green";
    }
    else{
        document.getElementById('message').innerHTML = "Wrong user and pass";
        document.getElementById('message').style.color = "red";
    }
})