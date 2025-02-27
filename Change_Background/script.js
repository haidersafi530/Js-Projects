//Project 1 Beginners

let colors = ['red', 'orange', 'blue', 'green'];
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let random = colors[Math.floor(Math.random()*colors.length)]
    document.body.style.background = random;
});