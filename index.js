
var time = 0;
function addTodos() {
    time += 1;
    const todoAreas = document.getElementById("texts");
    const newTodo = document.createElement("p");
    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "delete";
    deleteButton.onclick = dltTodo;
    newTodo.id = "id" + time;
    newTodo.innerText = time + "  " + document.getElementById("text_id").value;
    todoAreas.appendChild(newTodo);
    new_mission.appendChild(deleteButton);
}
function dltTodo() {
    let d = document.getElementById("texts");
    let del = document.getElementById("id" + time);
    d.removeChild(del);
    time -= 1;
}