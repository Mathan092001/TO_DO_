const inputbox = document.getElementById("todo-input");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === "") {
        alert("Please enter a task.");
        return;
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
};

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
