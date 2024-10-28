document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteBtn);
        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});
