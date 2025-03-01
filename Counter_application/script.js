let count = 0;
document.getElementById('decreasBtn').onclick = function(){
    count -= 1;
    document.getElementById('counter').innerHTML = count;
}
document.getElementById('increasBtn').onclick = function(){
    count += 1;
    document.getElementById('counter').innerHTML = count;
}
document.getElementById('reset').onclick = function(){
    count = 0;
    document.getElementById('counter').innerHTML = count;
}
