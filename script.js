
// ----------------------------addTask-----------------------------------------------


function addTask() {
  let task = taskInput.value;
  console.log(task);
  if (task == "") {
    alert("please fill the form");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="flex justify-evenly mt-6 items-center">
        <img src="./tick.png" alt="" width=20px>
        <span class="task-text">${task}</span>
        <button onclick="editTask(this)" type="button">
          <img src="./edit.png" alt="" width=20px>
        </button>
        <button onclick="deleteTask(this)" type="button">
          <img src="./delete.png" alt="" width=20px>
        </button>
      </div>`;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// ......------------------------------------editTask--------------------------







function editTask(button) {
  let li = button.parentNode;

 
  let currentTask = li.querySelector(".task-text").textContent;

  
  let newTask = prompt("Enter newTask:", currentTask);

  
  if (newTask) {
    li.querySelector(".task-text").textContent = newTask;
  }
  
}









// --------------------------deleteTask---------------------------------------

function deleteTask(button) {
  let li = button.closest("li");
  li.remove();
}
