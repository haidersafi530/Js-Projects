// let li = document.querySelectorAll('ul li:nth-child(2n)');
// li.forEach(function (elem) {
//     elem.classList.add('h1')
// })


// let h1 = document.querySelector('h1');
// h1.addEventListener('click', function () {
//     h1.style.color = "red";
// });

// let p = document.querySelector('p');
// p.addEventListener('dblclick', function () {
//     p.style.color = 'green';
//     p.style.border = '1px solid black';
//     p.style.padding = '20px';
// });
// let p = document.querySelector('p');
// function dblclick() {
//     p.style.border = "2px solid black";
//     p.style.padding = "20px";
// }

// p.addEventListener('dblclick', dblclick);
// p.removeEventListener('dblclick' , dblclick);

// let input = document.querySelector('input');
// input.addEventListener('input', function(){
//     let para = document.querySelector('h1');
//     para.textContent = input.value;
    
// })

// let box = document.getElementById('box');
// let position = 0;
// function moveBox(){
//     if(position >= 800){
//         clearInterval(Animation)
//     }else{
//         position++;
//         // box.style.left = position + 'px';
//         box.style.width = position + "px";
//     }
// }
// let animation = setInterval(moveBox, 20);

// let p = document.getElementById('text');
// let btn = document.getElementById('btn');

// btn.addEventListener('dblclick', function(){
//     p.style.opacity = '1';
//     p.style.backgroundColor = "yellow"
// })

// let ball = document.querySelector('#ball');
// let pos = 0;
// let direction = 1;

// function bounce() {
//     if (pos >= 100 || pos <= 0){
//         direction *= -1;
//     }
//     pos += direction * 5;
//     ball.style.top = pos + "px";    
// }
// setInterval(bounce, 10);

let input = document.querySelector('input');
let p = document.querySelector('h1');
input.addEventListener('input' , function (dets) {
    if(dets.data !== null){
        console.log(dets.data);
    }
})