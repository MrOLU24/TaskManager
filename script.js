const TaskManager = [];
document.getElementById("TaskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let Todo = document.getElementById("AddTask").value;
  TaskManager.push({ Todo: Todo, status: "Incomplete" });
  DisplayContent(TaskManager);
  AddModal.hide();
});
console.log(TaskManager);

const DisplayContent = (data) => {
  const element = document.getElementById("content");
  element.innerHTML = "";
  data.map((val, key) => {
    element.innerHTML += `
    <div class="card border-0 mx-5 shadow-sm mt-3">
         <div class="card-body">
           <h2 class="text-capitalize">${val.Todo}</h2>
           <button class="btn" onClick="Edit(${key})">
             <i class="fa-regular fa-pen-to-square"></i>Edit
           </button>
           <button class="btn" onClick="Delete(${key})"><i class="fa-solid fa-trash"></i>Delete</button>
           <span class="badge float-end bg-secondary ${
             val.status === "pending"
               ? "bg-warning"
               : val.status === "completed"
               ? "bg-success"
               : "bg-danger"
           }">
             ${val.status}
             </span>
         </div>
       </div>
 `;
  });
};
DisplayContent(TaskManager);
var AddModal = new bootstrap.Modal(document.getElementById("exampleModal"));
var EditModal = new bootstrap.Modal(document.getElementById("Editmodal"));
const Edit = (id) => {
  // alert(id)
  EditModal.show();
  document.getElementById("EditTask").value = TaskManager[id].Todo;
  document.getElementById("EditStatus").value = TaskManager[id].Todo;
  document.getElementById("TaskId").value = id;
};

//save
document.getElementById("EditForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let editTask = document.getElementById("EditTask").value;
  let status = document.getElementById("EditStatus").value;
  let taskId = document.getElementById("TaskId").value;
  TaskManager[taskId].Todo = editTask;
  TaskManager[taskId].status = status;
  DisplayContent(TaskManager);
  EditModal.hide();
});
//delete

const Delete = (TaskId) => {
  if (confirm("are you sure you want to delete?"))
    TaskManager.splice(TaskId, 1);
  DisplayContent(TaskManager);
};
