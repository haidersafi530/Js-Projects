let inp = document.querySelector('input');
let p = document.querySelector('p');

inp.addEventListener('input', function () {
    let val = inp.value;
    if(val.length === 0){
        p.textContent = "enter password";
        p.style.color = "gray";
    }
    else if(val.length < 5) {
        p.textContent = 'Too weak';
        p.style.color = 'red';

    }
    else if(/^[a-zA-Z]+$/.test(val)){
        p.textContent = 'Weak';
        p.style.color = "orange";

    }
    else if(/^[a-zA-Z0-9]+$/.test(val)){
        p.textContent = "Moderate";
        p.style.color = "blue";/^[\w!@#\$%\^\&*\)\(+=._-]+$/    

    }
    else if(/^[\w!@#\$%\^\&*\)\(+=._-]+$/.test(val)){
        p.textContent = 'Stronge';
        p.style.color = 'green';
    }
    else{
        p.textContent = "Unknown Strength";
        p.style.color = "black";
    }
});