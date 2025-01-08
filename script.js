const TaskManager = JSON.parse(localStorage.getItem("allTask")) || [];

// Add Task
document.getElementById("TaskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let Todo = document.getElementById("AddTask").value;
  TaskManager.push({ Todo: Todo, status: "Incomplete" });
  DisplayContent(TaskManager);
  localStorage.setItem("allTask", JSON.stringify(TaskManager));
  AddModal.hide();
});

// Display Content
const DisplayContent = (data) => {
  const element = document.getElementById("content");
  element.innerHTML = ""; // Clear previous content
  data.forEach((val, key) => {
    element.innerHTML += `
      <div class="card border-0 mx-5 shadow-sm mt-3">
        <div class="card-body">
          <h2 class="text-capitalize">${val.Todo}</h2>
          <button class="btn" onClick="Edit(${key})">
            <i class="fa-regular fa-pen-to-square"></i>Edit
          </button>
          <button class="btn" onClick="Delete(${key})">
            <i class="fa-solid fa-trash"></i>Delete
          </button>
          <span class="badge float-end ${
            val.status === "pending"
              ? "bg-warning"
              : val.status === "completed"
              ? "bg-success"
              : "bg-danger"
          }">${val.status}</span>
        </div>
      </div>
    `;
  });
};

// Initial Render
DisplayContent(TaskManager);

// Add Modal
var AddModal = new bootstrap.Modal(document.getElementById("exampleModal"));
var EditModal = new bootstrap.Modal(document.getElementById("Editmodal"));

// Edit Task
const Edit = (id) => {
  EditModal.show();
  document.getElementById("EditTask").value = TaskManager[id].Todo;
  document.getElementById("EditStatus").value = TaskManager[id].status;
  document.getElementById("TaskId").value = id;
};

// Save Edited Task
document.getElementById("EditForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let editTask = document.getElementById("EditTask").value;
  let status = document.getElementById("EditStatus").value;
  let taskId = document.getElementById("TaskId").value;
  TaskManager[taskId].Todo = editTask;
  TaskManager[taskId].status = status;
  DisplayContent(TaskManager);
  localStorage.setItem("allTask", JSON.stringify(TaskManager));
  EditModal.hide();
});

// Delete Task
const Delete = (TaskId) => {
  if (confirm("Are you sure you want to delete?")) {
    TaskManager.splice(TaskId, 1);
    DisplayContent(TaskManager);
    localStorage.setItem("allTask", JSON.stringify(TaskManager));
  }
};
