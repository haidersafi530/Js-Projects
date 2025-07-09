function generate() {
    let n = document.getElementById('total').value;
    let container = document.getElementById('boxContainer');
    container.innerHTML = "";

    for (let i = 1; i < n; i++){
        container.innerHTML += `<div style="margin:5px;padding:10px;border:1px solid black;">Box ${i}</div>`;
    }
}

