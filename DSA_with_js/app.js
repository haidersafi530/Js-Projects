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

// var pr = prompt("Add");

// if(pr === null){
//     console.log("cancaled");
// }else{
//     var n = Number(pr);
//     if(isNaN(n)){
//         console.log("invalid input");
//     }
//     else {
//         if(n > 0){
//             var sum = 0;    
//             for (var i = 1; i<=n; i++){
//                 sum = sum + i;
//             }
//             console.log(sum);
//         }
//         else{
//             console.log("should be positive more than 0");
//         }
//     }
// }
// var n = Number(prompt("kahan tak jaogy"));

// var i = 1;
// while(i<20){
//     console.log(i);
//     i++;
// }

// var ans = prompt("kuch bhi  dedo (exit for close)");
// while(ans !== 'exit'){
//     ans = prompt("kuch bhi  dedo (exit for close)");
// };

//sum of digits 

//guess the number 

// let random  = Math.floor(Math.random()*100) +1;
// let guess = -1;
// while(guess !== random){
//     guess = Number(prompt("guess the number"));
//     if(isNaN(guess) || guess <1 || guess > 100){
//         console.log("try again");
//         continue
//     }
//     if(guess>random){
//         console.log("too high");
//     }
//     else if(guess < random){
//         console.log("tow low ");
//     }
//     else{
//         console.log("Congrates ", guess);
//     }
// }

//Arrays in javascript 
// let arr = [];
// arr.push(100);
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.pop();
// console.log(arr);

// let arr = [];
// arr[0] = 100;
// arr[1] = 10;
// arr[2] = 30;
// arr[7] = 150;
// console.log(arr);

// let arr = new Array(3);
// arr.push(10);
// // arr[0] = 10;
// // arr[1] = 20;
// // arr[2] = 30;
// // arr[3] = 100;
// // arr[10] = 150;
// console.log(arr);

// let arr = new Array(5);
// // arr[0] = Number(prompt("enter a value"));
// for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(prompt("Enter a value"));
// };
// console.log(arr);

// let arr = [10,20,30,40,50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

// let arr = [10,20,30,40,50,4];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++){
//     if(max > arr[i]){
//         max = arr[i];
//     }   
// }
// console.log(max);

// let arr = [10,20,30,40,59];
// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let arr = [10,20,39,40,50];
// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let arr = [10,20,39,40,50];
// let max  = arr[0];
// for (let i = 1; i <  arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let arr = [1,5,10,50,100];
// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let arr = [10,30,56,43,29,64,49,60];
// let max = Math.max(arr[0], arr[1]);
// let Smax = Math.min(arr[0],arr[1]);

// for (let i = 2; i < arr.length; i++){
//     if(arr[i] > max){
//         Smax = max;
//         max = arr[i];
//     }else if(arr[i] > Smax && max != arr[i]) {
//         Smax = arr[i];
//     }
// }
// console.log(Smax);

// let arr = [10,20,30,40,50];
// let temp = new Array(arr.length);

// let j = 0
// for (let i = arr.length - 1; i >= 0 ; i--){
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp);  

// let arr = [10,20,30,40,50,60];

// let i = 0 , j = arr.length-1;

// while(i != j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr)

// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

// let i = 0 , j = 0;
// while(i < arr.length){
//     if(arr[i]===0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr);

// const studentsDatabase = ['Haide', 'Imran', 'Liaqat', 'Adil'];
// const findStudent = (allStudents , StudentName) => {
//     for (let i = 0; i < allStudents.length; i++){
//         if(allStudents[i] === StudentName){
//             console.log(`Found   ${StudentName}`);
//         }
//     }
// }
// findStudent(studentsDatabase, 'Imran');

// const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];
// const searchForItem = (item) =>{
//     for(let i = 0; i < groceries.length; i++){
//         if(groceries[i] === item){
//             console.log(`Found ${item}`);
//         }
//     }
//     for(let j = 0; j < groceries.length; j++){
//         if(groceries[j] === item){
//             console.log(`Found ${item} 2`);
//         }
//     }
// }
// searchForItem("eggs");


// const numbers = [1,2,3,4,5];
// const getElement = (arr, index) => arr[index];
// console.log(getElement(numbers, 0));

// function findPairs(arr){
//     for(let i = 0; arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             console.log(`Pairs ${arr[i]}, ${arr[i]}`);
//         }
//     }
// }
// const numbers =  [1,2,3,4,5];
// findPairs(numbers);

// function findPairs(arr){
//     for (let i = 0; i < arr.length; i++){

//     }
//     for(let q = 0; q < arr.length; q++){
//         console.log("-------", q);
        
//     }
// }

// const numbers = [1,2,3,4,5];
// findPairs(numbers);

// function findPairs(){
//     for(let i = 0; i < arr.length; i++){

//     }
//     for(let q = 0 ; q < 5; q++){
//         console.log('-------', );
//     }
// }
// const numbers = [1,2,3,4,5];
// findPairs(numbers);

// function findPairs(arr){
//     for(let i = 0; i < arr.lengthl; i++){
//         for(let j = i + 1; i < arr.length; j++){
//             console.log(`Pair : ${arr[i]}, ${arr[j]}`);
//         }
//     }
// }
// const numbers = [1,2,3,4,5];
// findPairs(numbers);

// function findPairs(arr){
//     for (let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             console.log(`Pairs : ${arr[i]}, ${arr[j]}`);
            
//         }
//     }
// }

// const numbers = [1,2,3,4,5];
// findPairs(numbers);

// function findPairs(arr){
//     for (let i = 0; i < arr.length; i++){

//     }
//     for (let j = 0; j < 5; j++){
//         console.log("-----------", j);
//     }
// }
// const numbers = [1,2,3,4,5];
// findPairs(numbers);

//array again 
// const stringArr = ['a', 'b', 'c', 'd', 'e'];
// const numArr = [1,2,3,4,5];
// const boolArr = [true, false];
// const mixed =  ['a', 2, true, undefined, null, {a: 'a'},['b']];
// console.log(mixed);

// class MyArray {
//     constructor(){
//         this.length = 0;
//         this.data = {}
//     }
//     push(value){
//         this.data[this.length] = value;
//         this.length++;
//         return this.length;

//     }
// }
// const myNewArray = new MyArray();
// console.log(myNewArray.push(30));

// class MyArray {
//     constructor(){
//         this.length = 1;
//         this.data = {};

//     }
//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;

//     }
// }
// function loop(arr){
//     const myNewArray = new MyArray();
//     for (let i = 0; i < arr.length; i++){
//         myNewArray.push(arr[i]);
//     }
//     console.log(myNewArray.data);
// }
// loop([10,20,30,40]);

// class MyArray {
//     constructor(){
//         this.length = 1;
//         this.data = {};
//     }
//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;}
// }
// const myNewArray = new MyArray();
// myNewArray.push("apple");
// console.log(myNewArray);

// class MyArray {
//     constructor(){
//         this.length = 0;
//         this.data = {};
//     }
//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }
//     get(index){
//         return this.data[index];
//     }
//     pop(){
//         const lastItem = this.data[this.length -1];
//         delete this.data[this.length -1];
//         this.length--
//         return lastItem;
//     }
//     shift(){
//         const firstItem = this.data[0];
//         for(let i = 0; i < this.length; i++){
//             this.data[i] = this.data[i + 1];
//         }
//     }
//     delete(index){
//         const item = this.data[index];
//         for(let i = index; i < this.length -1; i++){
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length -1]
//         this.length--
//         return item;
//     }

// }

// const myNewArray = new MyArray();
// myNewArray.push('apple');
// myNewArray.push('orange');
// myNewArray.push('mango');
// console.log(myNewArray.delete(0))
// myNewArray.pop();
// console.log(myNewArray);

// const items = [1,2,3,4,5];
// items.shift()

//revers string 

// const reverseString = str => str.split('').reverse().join();
// console.log(reverseString('Hello'));

// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log(reverseArray([1, 2, 3, 4, 5])); 

//reverse string 

// var string = prompt("Please enter a string");
// var strLen = string.length;
// var revStr = '';
// for(var i = strLen-1; i >= 0; i--){
//     revStr += string[i];
// }
// console.log(`${string} reverse is ${revStr}`);


//Palindromes 
// let string = prompt("Please enter your string");
// let len = string.length;
// let msg = "it is a palindrome";
// for(var i = 0; i < len/2; i++){
//     if(string[i] != string[len -1 -i]){
//         msg = "it is not palindrome";   
//     }
//     console.log(`${string} : ${msg}`);
    
// }

//reverse string 
// const reverseString = str => str.split('');

// const reverseString = function(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

//Palindrome
// const palindrome = function(str){
//     return str.split('').reverse().join('') === str;    
// }
// console.log(palindrome('Haider'));

//reverse int
// const reverseInt = n => {
//     const reversed = n.toString().split('').reverse().join('');
//     return parseInt(reversed) * Math.sign(n);
// }
// console.log(reverseInt(4637));

//sentence capitalization 
// const capitalize = str => {
//     return str.toLowerCase().split('').map(word => word[0].toUpperCase() + word.slice(1)).join('');
// };
// console.log(capitalize("Hello Word"));


//FizzBUzz
// const fizzBuzz = (n) => {
//     for (let i = 1; i < n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('fizzBuzz');
//         }
//         else if(i % 3 === 0){
//             console.log('Fizz');
//         }
//         else if(i % 5 === 0){
//             console.log("Buzz");
//         }else{
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(15);


// Max Profit 

// const maxProfit = (prices) => {
//     let maxPrice = prices[0];
//     let maxProfit = 0;
//     for (let i = 1; i < prices.length; i++){
//         const currentPrice = prices[i];
//         maxPrice = Math.min(maxPrice, currentPrice);
//         const portentialProfit = currentPrice - maxPrice;
//         maxProfit = Math.max(maxProfit, portentialProfit);
//         console.log(maxProfit);
//     }
//     return maxProfit;

// }
// const prices = [7,6,5,4,3,2,1];
// const profit = maxProfit(prices);
// console.log("Maximam Profit = ", profit);

//Array Chunk 
// const chunk = (array, size) => {
//     const chunked = []
//     let index = 0;
    
//     while (index < array.length){
//         const chunk = array.slice(index, index + size );
//         console.log("--", chunk);
//         chunked.push(chunk);
//         index += size;
//     }
//     return chunked;
// }
// console.log(chunk([1,2,3,4,5,6,7,8], 3));   


//Two Sum
// function twoSum(nums, target){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             //if the current number 
//             if(nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
//     return [];
// }
// const res = twoSum([2,7,11,15],9);
// const res2 = twoSum([2,4,5,7,9], 11);
// console.log(res);
// console.log(res2);

//linked List 
// class Node {
//     constructor(value){
//         this.head = value;
//         this.next = null;
        
//     }
// }
// class LinkedList {
//     constructor(value){
//         this.head = new Node(value);
//         this.tail = this.head;
//         this.length = 1;

//     }
// }
// const myLinkedList = new LinkedList(1);
// console.log(myLinkedList);

//LinkedList Implementation
// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;

//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//     }
//     insertAtEnd(data) {
//         const newNode = new Node()
//     }
// }

//async await >> promise chains >> callback hell
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");

// }, 4000);

// console.log("three");
// console.log("four");

//callback

// function sum(a,b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(10,20,sum);

//Nesting 
// let age = 19;
// if(age >= 18){

//     if(age >= 60){
//         console.log("Senior");
//     }
//     else{
//         console.log("Middle");
//     }
// }else{
//     console.log("Child");
// }

//nesting loop

// for(let i = 0; i < 5; i++){
//     let str = "";
//     for(let j = 0; j < 5; j++){
//         str = str + j;
//     }
//     console.log(i, str);
// }

//Callback
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     }, 2000);   

// }
// getData(1, () => {
//     getData(2); 
// })

//Promises in Js

// let promise = new Promise ((resolve, reject) => {
//     console.log("Im a promise");
//     reject("some error");
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("success");
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 2000);
//     })
// }

// let promise = new Promise ((resolve, reject) => {
//     console.log("Im a Promise");
//     reject("Some error occurred");
// })
// const getPromise = () =>{
//     return new Promise ( (resolve, reject) => {
//         console.log("im a promise");
//         // resolve("123");
//         reject("error");
//     });
// };
// let promise = getPromise();
// promise.then( () => {
//     console.log("Promise fullfilled");
// })
// promise.catch( (e) => {
//     console.log("Rejected", e);
// })   


//Promise Chain

// function asyncFunc(){
//     return new Promise ( (resolve, reject) => {
//         setTimeout(() => {
//             console.log('sum data 1');
//             resolve("success");
//         }, 3000);
//     });
// };
// console.log("Fetching data 1");     
// let p1 = asyncFunc();
// p1.then( (res) => {
//     console.log(res);
// });

//async await
function api() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("perfect data");
            resolve(200);
        }, 2000);
    });
}
async function getWhetherData() {
    await api();
}



















    

