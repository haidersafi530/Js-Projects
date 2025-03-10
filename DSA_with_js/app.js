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


// let unit = Number(prompt("Enter Your Electricity Units"));
// let amount = 0;

// if(unit>400){
//     amount += (unit-400) * 13;
//     unit = 400;
// }
// if(unit>200 && unit <= 400){
//     amount += (unit-200) * 8;
//     unit = 200;
// }
// if(unit>100 && unit <= 200){
//     amount += (unit-100) * 6;
//     unit = 100
// }
// amount += unit*4;
// console.log(amount);


// let unit = Number(prompt("Enter your electrycity unit"));
// let amount = 0;
// if(unit > 400){
//     amount += (unit-400) * 13;
//     unit = 400;
// }
// if(unit > 200 && unit <= 400){
//     amount += (unit-200) * 8;
//     unit = 200;
// }
// if(unit > 100 && unit <= 200){
//     amount += (unit-100) * 6;
//     unit = 100;
// }
// amount += unit*4;
// console.log(amount);



//PKR Deomination

// let amount = 5001;
// if(amount>=500){
//     console.log("500 Notes :" + Math.floor(amount/500));
//     amount = amount%500;
// }
// if(amount>=200){
//     console.log("200 Notes :" + Math.floor(amount/200));
//     amount = amount%200;
// }
// if(amount>=100){
//     console.log("100 Nots :" + Math.floor(amount/100));
//     amount = amount%100;
// }
// if(amount>=50){
//     console.log("50 Nots :" + Math.floor(amount/50))
//     amount = amount%50;
// }
// if(amount>=20){
//     console.log("20 Notes :" + Math.floor(amount/20));
//     amount = amount%20;
// }
// if(amount>=10){
//     console.log("10 Notes :" + Math.floor(amount/10));
//     amount = amount%10;
// }
// if(amount === 1){
//     console.log("1 Notes :" + amount);
// }


//Ternatory Operators
// 12>13 ? console.log("Yes ")  : console.log("No");
// console.log(14>13?"Hello":"No");
// 12>14 ? console.log("Yes ") : console.log("No");

// Nested Ternary Operators 
// let a = 0;
// // console.log(a>0?"Positive":a<0?"Negitive":"Zero");
// console.log(a>0 ? "Positive" : a<0 ? "Negitive" : "Zero");


//Swith Case 
// let day = 2;

// switch(day){
//     case 1: console.log("sunday");
//     break;
//     case 2: console.log("monday");
//     break
//     default: console.log("Invalid")
// }   

// let day = 2;
// switch(day){
//     case 1:
//     case 2:
//     case 3:
//         console.log("Yes");
//         break;
//     case 4:
//     case 5:
//         console.log("Per");
//         break;
//     default : console.log("invalid")
// }

// let num = (0.1 + 0.2).toFixed(1);
// switch(num){
//     case 0.3 : console.log("Hello");
//     break;
//     case 0.5 : console.log("hey");
//     break;
//     default : console.log("invalid");
    
// }

// let number  = Math.round((0.1 + 0.2) * 10) / 10;    
// switch (number){
//     case 0.3 : console.log("Hello");
//     break;
//     case 0.5 : console.log("Hey");
//     break;
//     default : console.log("Invalid");
// };


//looop | recursion 
// for(var i = 1; i < 10; i++){
//     console.log(i);
// }

//revers loop 
// for (var i = 200; i > 99; i--){
//     console.log(i); 
// } 

// for(var i = 200; i > 99; i--){
//     console.log(i);
// }

// let n = Number(prompt("Enter Your Value"));

// if(isNaN(n)){
//     console.log("invalid input");
// }
// else {
//     if(n > 0){
//         var sum = 0;
//         for (var i = 1; i <= n; i++){
//             sum = sum + i;
//         }
//         console.log(sum);
//     }
//     else{
//         console.log("should be positive ");
//     }
// }


//sum calcultaion 

var pr = prompt("Add");

if(pr === null){
    console.log("cancaled");
}else{
    var n = Number(pr);
    if(isNaN(n)){
        console.log("invalid input");
    }
    else {
        if(n > 0){
            var sum = 0;    
            for (var i = 1; i<=n; i++){
                sum = sum + i;
            }
            console.log(sum);
        }
        else{
            console.log("should be positive more than 0");
        }
    }
}
// var n = Number(prompt("kahan tak jaogy"));


