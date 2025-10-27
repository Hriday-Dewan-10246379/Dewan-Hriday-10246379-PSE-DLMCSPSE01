const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const dueDateInput = document.getElementById('dueDateInput');
const searchInput = document.getElementById('searchInput');
const taskList = document.getElementById('taskList');

// Load tasks from local storage when the page loads
window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => createTaskElement(task.text, task.completed, task.priority, task.dueDate));
};

// Add new task
function addTask() {
    const text = taskInput.value.trim();
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    createTaskElement(text, false, priority, dueDate);
    saveTasks();
    taskInput.value = "";
    dueDateInput.value = "";
}

// Create task element
function createTaskElement(text, completed, priority, dueDate) {
    const li = document.createElement('li');
    li.className = priority.toLowerCase();

    li.innerHTML = `
        <div>
            <span class="task-text">${text}</span><br>
            <small>Due: ${dueDate || 'No date'} | Priority: ${priority}</small>
        </div>
        <div>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    if (completed) li.classList.add('completed');

    // Toggle complete status on click
    li.querySelector('.task-text').addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    // Edit on double-click
    li.querySelector('.task-text').addEventListener('dblclick', () => {
        const newText = prompt("Edit task:", text);
        if (newText !== null && newText.trim() !== "") {
            li.querySelector('.task-text').textContent = newText.trim();
            saveTasks();
        }
    });

    taskList.appendChild(li);
}

// Delete task
function deleteTask(button) {
    const li = button.closest('li');
    taskList.removeChild(li);
    saveTasks();
}

// Save tasks to local storage
function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.querySelector('.task-text').textContent,
            completed: li.classList.contains('completed'),
            priority: li.className,
            dueDate: li.querySelector('small').textContent.replace('Due: ', '').split('|')[0].trim()
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Filter tasks
function filterTasks() {
    const query = searchInput.value.toLowerCase();
    taskList.querySelectorAll('li').forEach(li => {
        const text = li.querySelector('.task-text').textContent.toLowerCase();
        li.style.display = text.includes(query) ? '' : 'none';
    });
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
