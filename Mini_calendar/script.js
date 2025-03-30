const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dayNum = document.getElementById('day-number');
const yearEl = document.getElementById('year');


const date = new Date();
const mont = date.getMonth();
monthName.innerText = date.toLocaleDateString("en", {
    month: "long"
});

dayName.innerText = date.toLocaleDateString('en', {
    weekday: "long"
});

dayNum.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
