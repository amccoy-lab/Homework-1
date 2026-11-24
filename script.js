
// Requirement 1: Button changes page content

const changeButton = document.getElementById("changeButton");
const message = document.getElementById("message");

let clickCount = 0;

changeButton.addEventListener("click", function () {
  clickCount++;

  message.textContent =
    "You have clicked the button " + clickCount + " times!";
});


// Requirement 2: Style changes on user input

const colorInput = document.getElementById("colorInput");
const colorBox = document.getElementById("colorBox");

colorInput.addEventListener("input", function () {
  colorBox.style.backgroundColor = colorInput.value;
});


// Requirement 3: Dynamic list

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  const taskLabel = document.createElement("span");

  taskLabel.textContent = taskText;

  // Create a delete button
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Remove the individual list item
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // Append the elements to the list
  listItem.appendChild(taskLabel);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
  taskInput.focus();
});
