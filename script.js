const TaskManager = [];
document.getElementById("TaskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let Todo = document.getElementById("taskone").value;
  TaskManager.push({ Todo: Todo, Status: "Completed" });
});
console.log(TaskManager);
