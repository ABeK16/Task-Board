
$(document).ready(function () {

  const addTaskModal = document.getElementById('addTaskModal');

  // Retrieve tasks and nextId from localStorage
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

  // Function to generate a unique task id
  function generateTaskId() {
    const id = nextId;
    nextId++;
    localStorage.setItem("nextId", JSON.stringify(nextId));f
    return id;
  }

  // Function to create a task card
  function createTaskCard(task) {
    const taskId = task.id;
    const card = `
      <div class="task-card" id="task-${taskId}" data-id="${taskId}" draggable="true">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due Date: ${task.dueDate}</p>
        <button class="delete-btn" data-id="${taskId}">Delete</button>
      </div>
    `;
    return card;
  }

  // Function to render the task list and make cards draggable
  function renderTaskList() {
    const taskContainer = $("#todo-cards, #in-progress-cards, #done-cards");
    taskContainer.empty();

    taskList.forEach((task) => {
      const taskCard = createTaskCard(task);
      taskContainer.append(taskCard);

      $(`#task-${task.id}`).draggable({
        revert: true,
      });
    });
  }

  // Function to handle adding a new task
  function handleAddTask(event) {
    event.preventDefault();

    const title = $("#taskTitle").val();
    const description = $("#taskDescription").val();
    const dueDate = $("#taskDeadline").val();

    if (title && description && dueDate) {
      const newTask = {
        id: generateTaskId(),
        title: title,
        description: description,
        dueDate: dueDate,
      };

      taskList.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(taskList));

      renderTaskList();
      closeAddTaskModal();
    }
  }

  // Function to handle deleting a task
  function handleDeleteTask(event) {
    const taskId = $(event.target).data("id");
    taskList = taskList.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    renderTaskList();
  }

  // Function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  const taskId = ui.helper.data("id");
  const newStatus = event.target.id;

  // Todo: Update the task's status in your taskList array based on the newStatus
  const updatedTaskList = taskList.map((task) => {
    if (task.id === taskId) {
      // Update the task's status property based on the newStatus
      task.status = newStatus;
    }
    return task;
  });

  taskList = updatedTaskList;
  localStorage.setItem("tasks", JSON.stringify(taskList));

  renderTaskList();
}

// Function to show the modal
function openAddTaskModal() {
  addTaskModal.style.display = 'block';
}

  // Event listener for close button
  document.getElementById('closeModal').addEventListener('click', closeAddTaskModal);

  // Event listener to close modal when clicking outside the content
  window.addEventListener('click', (event) => {
    if (event.target === addTaskModal) {
      closeAddTaskModal();
    }
  });

  // Event listener to open modal on page load
  document.addEventListener('DOMContentLoaded', openAddTaskModal);

  // Function to make lanes droppable
  $(".lane").droppable({
    accept: ".task-card",
    drop: handleDrop,
  });

  // Initialize date picker
  $("#taskDeadline").datepicker();

  // Render initial task list
  renderTaskList();
});