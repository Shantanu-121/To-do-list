const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
// var count = 0

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something! ");
    }
    else {
        // ++count;
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // li.setAttribute("class", "task" + count);
        var del = document.createElement("button");
        del.innerHTML = "Delete";
        li.appendChild(del);
        del.setAttribute("style", "margin-left: 10px;");
        del.setAttribute("class", "delete");
        var edit = document.createElement("button");
        edit.innerHTML = "Edit";
        li.appendChild(edit);
        edit.setAttribute("style", "margin-left: 10px;");
        edit.setAttribute("class", "edit");
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
        e.target.parentElement.remove();
        saveData();
    }
});
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
        saveData();
    }
});
listContainer.addEventListener("click", function (e) {
    if (e.target.className === "edit") {
        var txt = e.target.parentElement.textContent;
        txt = txt.replace("Delete", "");
        txt = txt.replace("Edit", "");
        inputBox.value = txt;
        inputBox.focus();
        saveData();
        
    }
});
function saveData() {
    localStorage.setItem("dat", listContainer.innerHTML);
}
function displayData() {
    listContainer.innerHTML = localStorage.getItem("dat");
}
displayData();








