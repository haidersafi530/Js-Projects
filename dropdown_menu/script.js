let select = document.getElementById('years');

for (let year = 2000; year <= 2025; year++){
    select.innerHTML += `<option value='${year}'>${year}</option>`;
}