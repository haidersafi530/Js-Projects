let tasks = document.querySelectorAll('.task');
document.getElementById('checkBtn').addEventListener('click' , function () {
    let p = document.getElementById('output');
    tasks.forEach(function(task, index){
        p.innerHTML += "Task" + (index + 1) + " : " + (task.checked ? "Done" : "Pending") + "<br>";
    });
}); 