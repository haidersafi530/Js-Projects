    let inp = document.querySelector('input');
    let p = document.querySelector('p');
    let btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        let age = inp.value;
        if(age >= 18){
            p.textContent = 'You can vote ';
            p.style.color = "green";
        }
        else {
            p.textContent = 'you can not vote';
            p.style.color = 'red';
        }
    })
