const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const task =  taskInput.value.trim();
    if(task){
        createTaskElement(task);
        taskInput.value = '';
    }else{
        alert('Please enter a task');
    }
}
addButton.addEventListener('click', addTask);
function createTaskElement(task){
    const listItem = document.createElement('li');
    listItem.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';
    listItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    })
    taskList.appendChild(listItem); 
}
function saveItems() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('task', JSON.stringify(tasks));
}
function loadTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || []);
    tasks.forEach(createTaskElement);
}