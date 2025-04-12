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
    

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        li.remove();
    }

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = "";

});




