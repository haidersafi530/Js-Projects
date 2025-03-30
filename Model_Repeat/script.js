const model = document.querySelector('.model');
const openModelButton = document.querySelector('.openModelButton');
const closeModelButton = document.querySelector('.close-model');

let openModel = () => {
    model.classList.remove('close');
}

openModelButton.addEventListener('click', () => {
    openModel();
});

let closeModel = () => {
    model.classList.add('close');
}
closeModelButton.addEventListener('click', () => {
    closeModel();
})
