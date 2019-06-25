document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.querySelector("#create-task-form")
  const taskDescription = document.querySelector("#new-task-description")

  taskForm.addEventListener("submit", function(e){
    e.preventDefault();

    // create event listener for priority
    const priority = document.querySelector("#priority")


    // Find tasks list form html
    const taskList = document.querySelector("#tasks")

    // Create a new list element in the task list
    let listItem = document.createElement("li")

    // Create delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "X"

    // Create edit button
    const editBtn = document.createElement("button")
    editBtn.innerHTML = "edit"

    // Append the list item to the task list
    taskList.appendChild(listItem)
    const listText = document.createElement("span")
    listItem.appendChild(listText)
    listText.innerText = taskDescription.value
    listItem.style.color = priority.value
    listItem.appendChild(editBtn)
    listItem.appendChild(deleteBtn)

    // deleteBtn EventListener
    deleteBtn.addEventListener("click", function(e){
      taskList.removeChild(listItem)
    })

    // editBtn EventListener
    editBtn.addEventListener("click", function(e){
      const input = document.createElement('input')

      listItem.innerText = "yo"
    })

    // Clear top text bar
    taskDescription.value = "";

  })
});
