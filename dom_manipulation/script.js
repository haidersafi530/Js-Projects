let li = document.querySelectorAll('ul li:nth-child(2n)');
li.forEach(function (elem) {
    elem.classList.add('h1')
})