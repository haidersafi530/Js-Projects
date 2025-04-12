let add = document.getElementById('btn');
add.addEventListener('click', function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = "Delete<br><br>";
    delBtn.onclick = function () {
        li.remove();
    }

    li.appendChild(delBtn);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = "";
});




