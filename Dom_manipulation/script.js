// //Piller of dom === 4
// //1 . Slections of and element --
// var a = document.querySelector("h1");

// //2 . Changing HTML -- 
// a.innerHTML = "Changed HTML";

// //3 . Changing CSS --
// a.style.color = "red";
// a.style.backgroundColor = "lightblue";

// //4 . Event Litener -- 
// a.addEventListener("click", function(){
//     a.innerHTML = "Click Success";
// })


// //Simple Bulb Project
// var bulb = document.querySelector('#bulb');
// var btn = document.getElementById('onBtn');
// var flag = 0;

// btn.addEventListener('click', function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow";
//         flag = 1;
//     }else{
//         bulb.style.backgroundColor = "transparent";
//         flag = 0;
//     }  
// })

// //multiple Events --
// // var h = document.querySelectorAll('h2');
// // h.forEach(function(e){
// //     console.log(e);
// // })

// //SetTimeOut --
// var h = document.querySelector('h2');
// h.textContent = "bye";


//selection of element
// var a = document.querySelector('h1');

// //Changing HTML
// a.innerHTML = "Hello";

// //Canging CSS
// a.style.color = "red";
// a.style.backgroundColor = "green";
// a.style.display = "block";

// //
// a.addEventListener('click', function () {
//     a.innerHTML = "Clicked Succues";
//     a.style.cursor = "pointer";
   
// })

var bulb = document.querySelector('#bulb');
var btn = document.querySelector('button');
var flag = 0;

btn.addEventListener('click', function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        console.log("CLikced");
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        console.log("Again clicked");
        flag = 0;
    }
});





