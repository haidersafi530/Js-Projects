const bodyEl = document.querySelector('body');
bodyEl.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement('span');
    spanEl.style.left = xPos + 'px';
    spanEl.style.top = yPos + 'px';
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    },2000);
});
const span = document.querySelector('span');
setTimeout(() => {
    span.remove();
},2000);

setTimeout(() => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Haider Safi";
    h1.style.color = "#fff";
    h1.style.textAlign = "center";
    bodyEl.appendChild(h1);
},2000);