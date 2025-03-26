// let body = document.getElementsByTagName('body')[0];


// setTimeout(() => {
//     console.log("Hi");
// },2000); 

//callbacks 
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}
calculator(1,2,sum);
