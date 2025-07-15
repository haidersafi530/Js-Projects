// let li = document.querySelectorAll('ul li:nth-child(2n)');
// li.forEach(function (elem) {
//     elem.classList.add('h1')
// })

let h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
    h1.style.color = "red";
});

let p = document.querySelector('p');
p.addEventListener('dblclick', function () {
    p.style.color = 'green';
    p.style.border = '1px solid black';
    p.style.padding = '20px';
});
