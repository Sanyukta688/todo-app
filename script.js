let taskArray = [];

function TaskItem(value) {
    this.value = value;
}

const formBox = document.getElementById("formBox");
const inputBox = document.getElementById("inputBox");
const listBox = document.getElementById("listBox");

formBox.addEventListener("submit", function(event) {
    event.preventDefault();

    let userInput = inputBox.value;

    if(userInput === "") {
        alert("Please enter a task!");
        return;
    }

    let newTask = new TaskItem(userInput);
    
    taskArray.push(newTask);

    inputBox.value = "";

    showTasks();
});

function showTasks() {
    listBox.innerHTML = "";

    taskArray.forEach(function(item, i) {
        let li = document.createElement("li");
        li.innerText = item.value;

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        removeBtn.addEventListener("click", function() {
            removeTask(i);
        });

        li.appendChild(removeBtn);

        listBox.appendChild(li);

    });
}

function removeTask(i) {
    taskArray.splice(i, 1);
    showTasks();
    alert("Task Removed!");
}