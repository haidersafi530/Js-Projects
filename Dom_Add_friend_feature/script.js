var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
// var removeFriend = document.querySelector("#remove");

var flag = 0;

btn.addEventListener('click', function(){
    if(flag == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        flag = 1;
        btn.innerHTML = "Remove Friend"
    }else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        flag = 0;
        btn.innerHTML = "Add Friend";
    }

});
// removeFriend.addEventListener('click', function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red";
// })