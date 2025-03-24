fetch('readme.txt')
.then(response => response.text())
.then(data => document.write(data));