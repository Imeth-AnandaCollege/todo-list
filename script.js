function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = () => li.classList.toggle("completed");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-name";

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "🗑️";
  delBtn.className = "delete-button";
  delBtn.onclick = () => li.remove();

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
  input.focus();
}
