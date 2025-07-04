const checkboxes = document.querySelectorAll('.task');
const result = document.getElementById('result');

document.getElementById("countBtn").addEventListener('click', function () {
    let count = 0;
    checkboxes.forEach(function (box) {
        if(box.checked){
            count++;
        }
    });

    result.innerHTML = "You Selected" + count + "Task(s).";
})