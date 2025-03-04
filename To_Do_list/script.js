let inputs = document.getElementById("inp");
let text = document.querySelector('.text');

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Your Task");
    }else{
        let newElement = document.createElement('ul');
        newElement.innerHTML = `${inputs.value}`;
        text.appendChild(newElement);
    }
};
    document.addEventListener('keypress', function(e){
        if(e.key === "Enter"){
            Add();
        }
    });