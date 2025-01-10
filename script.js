document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;
    let taskTime = document.getElementById('taskTime').value;
    
    if (taskText === '' || taskTime === '') {
        alert('Please enter a task and set a time!');
        return;
    }

    let li = document.createElement('li');
    li.textContent = taskText + ' - ' + new Date(taskTime).toLocaleString();

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    // Calculate the time difference for reminder
    let timeDifference = new Date(taskTime) - new Date();
    if (timeDifference > 0) {
        setTimeout(function() {
            alert(`Reminder: It's time to complete the task - "${taskText}"`);
        }, timeDifference);
    }

    taskInput.value = ''; // Clear input
    document.getElementById('taskTime').value = ''; // Clear time
});
