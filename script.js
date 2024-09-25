// Task array to store all tasks
let tasks = [];

function addTask(taskName) {
    if (taskName.trim() === '') {
        throw new Error('Task name cannot be empty');
    }

    // Check if the task already exists
    if (tasks.some(task => task.name === taskName)) {
        throw new Error('Task already exists');
    }

    tasks.push({ name: taskName, completed: false });
}

function removeTask(index) {
    tasks.splice(index, 1);
}


function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
}

function getTasks() {
    return tasks;
}

// Check if running in a Node.js environment
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    // Export the functions for testing
    module.exports = {
        addTask,
        removeTask,
        toggleTaskCompletion,
        getTasks
    };
} else {
    // Add event listener to handle form submission
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('task-input');
        const taskName = taskInput.value.trim();

        try {
            addTask(taskName);
            updateTaskList();
            taskInput.value = '';  // Clear input field after adding task
        } catch (error) {
            alert(error.message);
        }
    });

    // Function to update the DOM with the current list of tasks
    function updateTaskList() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        getTasks().forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.textContent = `${task.name} - ${task.completed ? 'Completed' : 'Pending'}`;
            
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Toggle';
            toggleButton.className = 'btn btn-outline-primary mx-3'
            toggleButton.addEventListener('click', () => {
                toggleTaskCompletion(index);
                updateTaskList();
            });

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'btn btn-outline-danger'
            removeButton.addEventListener('click', () => {
                removeTask(index);
                updateTaskList();
            });

            taskItem.appendChild(toggleButton);
            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
        });
    }
}
