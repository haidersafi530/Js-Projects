function bins(){
    let prifix = 42;
    let randomDigits = Math.floor(1000 + Math.random() * 9000);
    return prifix + randomDigits;
}
document.write(bins());