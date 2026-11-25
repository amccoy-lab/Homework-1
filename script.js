// =====================================
// REQUIREMENT 1: BUTTON CHANGES CONTENT
// =====================================

const changeButton = document.querySelector("#changeButton");
const message = document.querySelector("#message");

let clickCount = 0;

const motivationalQuotes = [
    "Believe in yourself and keep going!",
    "Progress is more important than perfection.",
    "Small steps lead to big achievements.",
    "Every challenge is an opportunity to learn.",
    "Stay focused. Your hard work will pay off!",
    "You are capable of achieving great things.",
    "Keep learning, growing, and improving!"
];

changeButton.addEventListener("click", function () {

    clickCount++;

    const quoteIndex =
        (clickCount - 1) % motivationalQuotes.length;

    message.textContent =
        motivationalQuotes[quoteIndex] +
        " | Motivation boosts: " + clickCount;

});


// =====================================
// REQUIREMENT 2: LIVE STYLE CHANGES
// =====================================

const dashboardPreview = document.querySelector("#dashboardPreview");
const studentName = document.querySelector("#studentName");
const welcomeMessage = document.querySelector("#welcomeMessage");
const themeSelect = document.querySelector("#themeSelect");
const fontSlider = document.querySelector("#fontSlider");
const fontValue = document.querySelector("#fontValue");
const resetDashboard = document.querySelector("#resetDashboard");


// Personalized welcome message

studentName.addEventListener("input", function () {

    const name = studentName.value.trim();

    if (name === "") {

        welcomeMessage.textContent = "Welcome, Student!";

    } else {

        welcomeMessage.textContent = "Welcome, " + name + "!";

    }

});


// Change dashboard theme in real time

themeSelect.addEventListener("change", function () {

    dashboardPreview.className =
        "theme-" + themeSelect.value;

});


// Change font size in real time

fontSlider.addEventListener("input", function () {

    welcomeMessage.style.fontSize =
        fontSlider.value + "px";

    fontValue.textContent =
        fontSlider.value + "px";

});


// Reset dashboard customization

resetDashboard.addEventListener("click", function () {

    studentName.value = "";
    themeSelect.value = "pink";
    fontSlider.value = "24";

    welcomeMessage.textContent = "Welcome, Student!";
    welcomeMessage.style.fontSize = "24px";

    dashboardPreview.className = "theme-pink";

    fontValue.textContent = "24px";

});


// =====================================
// REQUIREMENT 3: DYNAMIC STUDY LIST
// =====================================

const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");


// Function to add a new task

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a study task.");
        taskInput.focus();
        return;

    }

    // Create a new list item

    const listItem = document.createElement("li");
    const taskLabel = document.createElement("span");

    taskLabel.textContent = taskText;


    // Create a delete button

    const deleteButton = document.createElement("button");

    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-button");

    deleteButton.setAttribute(
        "aria-label",
        "Delete task: " + taskText
    );


    // Delete the selected task

    deleteButton.addEventListener("click", function () {

        listItem.remove();
        taskInput.focus();

    });


    // Add elements to the study list

    listItem.appendChild(taskLabel);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);


    // Clear the input field

    taskInput.value = "";
    taskInput.focus();

}


// Add task by clicking the button

addButton.addEventListener("click", addTask);


// Add task by pressing Enter

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();
        addTask();

    }

});
