function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = () => li.classList.toggle("completed");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done ✅";
  doneBtn.className = "done-button";
  doneBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
    checkIfEmpty();
  };

  li.appendChild(doneBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
  input.focus();
  checkIfEmpty();
}

function checkIfEmpty() {
  const taskList = document.getElementById("taskList");
  const message = document.getElementById("emptyMessage");
  message.style.display = taskList.children.length === 0 ? "block" : "none";
}


checkIfEmpty();
