const items = document.querySelectorAll('#fruits li');
document.getElementById('colorBtn').addEventListener('click', function () {
    items.forEach(function (item) {
        item.style.color = "green";
    });
});