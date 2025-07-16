// let sel = document.querySelector('select');
// let p = document.querySelector('p');
// sel.addEventListener('change', function (dets){
//     console.log(dets.target.value);
//     p.textContent = `${dets.target.value} device selected`;
// })

let h1 = document.querySelector('h1');

window.addEventListener('keydown', function(dets){
    console.log(dets.key);
    h1.textContent = dets.key;
});
    