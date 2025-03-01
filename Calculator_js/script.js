let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';


buttonsArray.forEach(function(btn){
   btn.addEventListener('click', function(event){
    if(event.target.textContent == "DEL"){
        string  = string.substring(0, string.length - 1)
        display.value = string; 
    }
    else if(event.target.textContent == "AC"){
        string  = '';
        display.value = string;
    }
    else if(event.target.textContent == '='){
        string = eval(string);
        display.value = string;
    }

    else{      
        string += event.target.textContent;
        display.value = string;
    }
    
   })
})
