    let inp = document.querySelector('input');
    let p = document.querySelector('p');
    let btn = document.querySelector('button');
    let orange = "#fc9403";

    btn.addEventListener('click', function () {
        let age = Number(inp.value);
        if(isNaN(age) || age === 0){
            p.textContent = 'Please enter your age';
            p.style.color = orange;
        }
        if(age >= 18){
            p.textContent = 'You can vote ';
            p.style.color = "green";
        }
        
        else {
            p.textContent = 'you can not vote';
            p.style.color = 'red';
        }
    })
