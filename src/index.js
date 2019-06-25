document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.querySelector("#create-task-form")
  const taskDescription = document.querySelector("#new-task-description")

  taskForm.addEventListener("submit", function(e){
    e.preventDefault();

    const taskList = document.querySelector("#tasks")
    let todoLi = document.createElement("li")

    taskList.appendChild(todoLi)
    todoLi.innerHTML = taskDescription.value
    taskDescription.value = "";
  })
});
