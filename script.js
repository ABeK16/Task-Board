// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

document.addEventListener('DOMContentLoaded', () => {
    const newTaskBtn = document.getElementById('new-task-btn');
    const taskModal = document.getElementById('task-modal');
    const saveTaskBtn = document.getElementById('save-task-btn');
  
    newTaskBtn.addEventListener('click', () => {
      taskModal.style.display = 'block';
    });
  
    window.onclick = (event) => {
      if (event.target === taskModal) {
        taskModal.style.display = 'none';
      }
    };
  
    document.getElementsByClassName('close')[0].onclick = () => {
      taskModal.style.display = 'none';
    };
  
    saveTaskBtn.addEventListener('click', () => {
      // Handle saving task to localStorage
      // Update task board accordingly
      // You need to implement these functions
      saveTask();
      updateTaskBoard();
      taskModal.style.display = 'none';
    });
  
    // Initial setup or retrieval of tasks from localStorage
    initializeTaskBoard();
  });
  
  function saveTask() {
    // Implement the logic to save a task to localStorage
  }
  
  function updateTaskBoard() {
    // Implement the logic to update the task board based on saved tasks
  }
  
  function initializeTaskBoard() {
    // Implement the logic to initialize the task board from localStorage
  }

const tasks = [
    { id: 1, text: 'Task 1', status: 'todo' },
    { id: 2, text: 'Task 2', status: 'in-progress' },
    { id: 3, text: 'Task 3', status: 'done' }
];

// Function to render tasks
function renderTasks() {
    const todoList = document.getElementById('todo-tasks');
    const inProgressList = document.getElementById('in-progress-tasks');
    const doneList = document.getElementById('done-tasks');

    // Clear existing tasks
    todoList.innerHTML = '';
    inProgressList.innerHTML = '';
    doneList.innerHTML = '';

    // Render tasks based on status
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;

        switch (task.status) {
            case 'todo':
                todoList.appendChild(li);
                break;
            case 'in-progress':
                inProgressList.appendChild(li);
                break;
            case 'done':
                doneList.appendChild(li);
                break;
            default:
                break;
        }
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = {
            id: tasks.length + 1,
            text: taskText,
            status: 'todo'
        };

        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

// Initial rendering
renderTasks();

// Function to show the modal
function openAddTaskModal() {
  addTaskModal.style.display = 'block';
}

// Function to close the modal
function closeAddTaskModal() {
  addTaskModal.style.display = 'none';
}

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', closeAddTaskModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === addTaskModal) {
    closeAddTaskModal();
  }
});