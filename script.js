const TaskManager = [{Todo: "working", status: "completed"}, {Todo: "coding", status: "incomplete"}];
document.getElementById("TaskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let Todo = document.getElementById("AddTask").value;
  TaskManager.push({ Todo: Todo, status: "pending" });
});
console.log(TaskManager);

const DisplayContent = (data) => {
  const element = document.getElementById("content");
  element.innerHTML = "";
  data.map((val,key)=>{
    element.innerHTML += `
    <div class="card border-0 mx-5 shadow-sm mt-3">
         <div class="card-body">
           <h2 class="text-capitalize">${val.Todo}</h2>
           <button class="btn">
             <i class="fa-regular fa-pen-to-square"></i>Edit
           </button>
           <button class="btn"><i class="fa-solid fa-trash"></i>Delete</button>
           <span class="badge float-end bg-secondary">pending</span
         </div>
       </div>
 
 `;
  })
};
DisplayContent(TaskManager)
