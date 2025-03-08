//Haider Safi
// let a = 10;
// let b = 20;
// console.log(a+b);

// let a = 10;
// let b = "20";
// console.log(typeof(a+b));

// let a = 10;
// let b = 20;
// console.log("sum of 10 and 20 " + (a+b));
// console.log("1" +1); // Ans 11

//Accept and print the answer;

// let age  = prompt("What is your age");
// age = Number(age);
// console.log(typeof age);

// Type Casting 
// let a = 10;
// let b = 20;
// let c = 30;
// [b,a] = [a,c];
// console.log(a,b)

// let c = a;  //10
// b = a; // 10
// b = c; // 10
// a = a + b + c;
// a = a - b;

// console.log(b);
// console.log(a);
// console.log(c);

// let a = 12;
// let b = 20;
// console.log(Math.floor(a/b));

// let a = 7;
// let b = 2;
// console.log(Math.floor(b/a));

// let a = 4567;
// console.log(a % 10);

//Comparison and Relational Operators 
//< >  <= >= !=
// console.log(10 != 10);

//Logical Operators 
//  && || 
// console.log(10 > 6 || 15<9);

//Unairy Operators 
// let i = 11;
// i = i++ + ++i;
// console.log(i); //ANS 24

// let a = true;
// a++;
// console.log(a);

// let a = 10;
// console.log(a);

// let a = 10;
// let b = ++ (a++);
// console.log(b);

//Math Functions 
// console.log(Math.round(10.3));//10
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.9));
// console.log(Math.trunc(18.8));
// console.log(Math.pow(2,5));
// console.log(Math.sqrt(128)); 
// console.log(Math.abs(-15));
// console.log(Math.max(50,40,20));
// console.log(Math.min(10,20,50));
// console.log(Math.trunc(Math.random()*9999));

// let a = 89.47875;
// console.log(Number(a.toFixed(2)));

//Math Problems 
//Calculate Area and Perameters
// let a = 5;
// let b = 7;
// console.log(a*b);

// let a = 5;
// let b = 2;
// let c = 3;
// let s = (a+b+c)/2;
// console.log(s)
// console.log(Math.sqrt(s * (s-a) * (s-b)));

// var ans = Number(prompt("what is your age"));
// a = 10;
// b = 20  ;

// if(a > b){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }
// var ans = Number(prompt("Enter Your Age")); //Haider
// if(isNaN(ans)){
//     console.log("Wrong Input");
// }
// else if(ans >= 18){
//     console.log("You can vote");  
// }
// else{
//     console.log("Your can not vote"); 
// }


// var amount =  Number(prompt("what is your final amount ?"));
// if(amount > 0 && amount <= 5000){
//     console.log()
// }
// console.log(amount);

//Conditional Statement

// let ans = Number(prompt("Enter your age"));
// if(isNaN() == true){
//     console.log("wrong input");
    
// }else if(ans >= 18){
//     console.log("yes you can vote");
// }
// else{
//     console.log("no vote okay");
// };

// let amount = Number(prompt("enter your amount for percentage"));
// let display = 0;
// if(amount > 5000 && amount <= 7000){
//     display = 0;
// }else if(amount > 7000 && amount <= 9000){
//     display = 5;
// }else if(amount > 9000 && amount <= 12000){
//     display = 15;
// }else if(amount >= 15000){
//     display = 20;
// }else{
//     console.log("please enter your correct value");
// }   
// console.log(amount - Math.floor((display*amount)/100));


let unit = Number(prompt("Enter Your Electricity Units"));
let amount = 0;

if(unit>400){
    amount += (unit-400) * 13;
    unit = 400;
}
if(unit>200 && unit <= 400){
    amount += (unit-200) * 8;
    unit = 200;
}
if(unit>100 && unit <= 200){
    amount += (unit-100) * 6;
    unit = 100
}
amount += unit*4;
console.log(amount);


