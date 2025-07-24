let inp = document.querySelector('input');
let p = document.querySelector('p');

inp.addEventListener('input', function () {
    if(inp.checkValidity()){
        p.textContent = 'Valid email (HTML5)';
    }
    else{
        p.textContent = "Invalid email";
    }
})
