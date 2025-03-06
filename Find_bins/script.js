// function bins(){
//     let prifix = 42;
//     let randomDigits = Math.floor(1000 + Math.random() * 9000);
//     return prifix + randomDigits;
// }
// document.write(bins());



function generateString() {
    let prefix = "42";  // 
    let randomDigits = Math.floor(1000 + Math.random() * 9000).toString(); // 4 random digits
    return prefix + randomDigits;  // 6 
}

//
for (let i = 0; i < 1000; i++) {
    document.write(generateString()+"<br>");    
}

