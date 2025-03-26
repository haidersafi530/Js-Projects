// let body = document.getElementsByTagName('body')[0];


// setTimeout(() => {
//     console.log("Hi");
// },2000); 

//callbacks 
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }
// calculator(1,2, (a,b) => {

// });

// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello,3000);

//nesting 
// let age = 18;
// if(age > 18){
//     if(age >= 60){
//         console.log("Senior");
//     }
//     else{
//         console.log("Middle")
//     }
// }else{
//     console.log("child")
// }

for(let i = 0; i < 5; i++){
    let str = "";
    for(let j = 0; j < 5; j++){
        str = str + j;
    }
    console.log(i,str);
}