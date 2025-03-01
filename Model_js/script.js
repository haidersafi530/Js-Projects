const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.openModelButton');
const closeModlaButton = document.querySelector('.close_modal');


// openModalButton.addEventListener('click', function (){
//     let openmodal = function(){
//         modal.classList.remove("close");
//     }
//     openmodal();
// })
// closeModlaButton.addEventListener('click', function(){
//     let closemodal = function(){
//         modal.classList.add('close');
//     }
//     closemodal();
// })

//METHOD TWO
let openmodal = () => {
    modal.classList.remove('close');
}
openModalButton.addEventListener('click', () => {
    openmodal();
})

let closemodal = () => {
    modal.classList.add('close');
}

closeModlaButton.addEventListener('click', () => {
    closemodal();
})