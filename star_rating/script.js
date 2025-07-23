let stars = document.getElementById('stars');

for (let i = 1; i <= 2; i++){
    stars.innerHTML = `<span onclick="rate(${i})" style="font-size:30px;cursor:pointer;">★</span>`;

}
function rate(num){
    document.getElementById('rating').innerHTML = `You rated :  ${num} star(s)`;
}