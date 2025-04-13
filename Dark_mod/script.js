let toggler  = document.getElementById('switch');
toggler.addEventListener('click', () => {
   if(toggler.checked === true) {
    document.body.style.backgroundColor = 'black';
    document.getElementById('label').style.backgroundColor = "#fff";
   }else{
    document.body.style.backgroundColor = "#fff";
    document.getElementById('label').style.backgroundColor = "#000";
   }
})