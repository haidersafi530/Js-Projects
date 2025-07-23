// let form = document.querySelector('form');
// let inputs = document.querySelectorAll('input');
// let main = document.querySelector('#main');

// form.addEventListener('submit', function(dets){
//     dets.preventDefault();

//     let card = document.createElement('div');
//     card.classList.add('card');


//     let profile = document.createElement('div');
//     profile.classList.add('profile');


//     let img  = document.createElement('img');
//     img.setAttribute('src', inputs[0].value);



//     let h3 = document.createElement('h3');
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement('h5');
//     h5.textContent = inputs[2].value;

//     let p = document.createElement('p');
//     p.textContent = inputs[3].value;



//     profile.appendChild(img);


//     card.appendChild(profile);

//     card.appendChild(h5);

//     card.appendChild(h3);

//     card.appendChild(p);
    
//     main.appendChild(card);

// });
// let p = "red"

// let red = document.querySelector('.red');
// red.addEventListener('mouseover', function(){
//         red.style.backgroundColor = "yellow";
// });
// red.addEventListener('mouseout', function (){
//     red.style.backgroundColor = p;
// });

// let h1 = document.querySelector('h1');
// window.addEventListener('keydown', function(dets) {
//     if(dets.key == ' '){
//         h1.textContent = "SPC"
//     }
//     else if (dets.key == "CapsLock"){
//         h1.textContent = "Zahoor";
//         h1.style.color = "red";
//     }

//     else{
//         h1.textContent = dets.key;
//     }
    
    
// })
// let div = document.querySelector('div');
// window.addEventListener('mousemove', function(dets){
//     // div.style.left = dets.clientX + "px";

//     // div.style.top = dets.clientY + "px";
//     div.style.width = dets.clientX + "px";
//     div.style.height = dets.clientY + "px";
     
    
// })
// document.querySelector('#main').addEventListener('click', function (){
//     alert("clicked")
// })

// let ul = document.querySelector('ul');
// ul.addEventListener('click' , function (dets){
//     dets.target.classList.toggle('lt');
// })
// let input = document.querySelector('input');
// let span = document.querySelector('span');
// input.addEventListener('input', function(){
//     let left = 20 - input.value.length;
//     span.textContent = left;
//     if(left < 0){
//         span.style.color = "red";
//     }else{
//         span.style.color = "white";
//     }
// });
// let span = document.querySelector('span');
// window.addEventListener('keydown', function(dets){
//     if(dets.key == "h"){
//         span.textContent = "";
//     }else{
//         span.textContent = dets.key;
//     }
// })

let nm = document.querySelector('#nm');
let form = document.querySelector('form');
    
form.addEventListener('submit', function(dets){
    dets.preventDefault();
    if(nm.value.length <= 2){
        let hide = document.querySelector('#hide');
        hide.style.display = "initial";
    }
    else{
        document.querySelector('#hide').style.display = "none";
    }
})