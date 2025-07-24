let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('form');

form.addEventListener('submit', function(dets){
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isvalid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        isvalid = false;

    }
    if(!passwordans){
        document.querySelector('#passwordError').textContent = "Password is incorrect";
        isvalid = false;
    }
    if(isvalid){
        document.querySelector("#message").textContent = "every things is fine";
    }

})