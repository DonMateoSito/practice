// VARS
const btnSend = document.querySelector('.btn-send');
const btnClear = document.querySelector('.btn-clear')
const input = document.querySelector('.task-input');
const form = document.querySelector('form');
const list = document.querySelector(".task-list");
const listItem = document.querySelector(".task-item");
let taskValue;



function noDefault(e){
    e.preventDefault();
}

//SUBMIT
function submitInput() {
    if (input.value === ""){
        console.log("no input")
    }
    else{
        taskValue = input.value;
        console.log(`Task to add = ${taskValue}`);
        input.value = "";
        addNewItem();
        storeInLS(taskValue);

    }
    
}
function addNewItem() {
    const newListItem = document.createElement("li");
    newListItem.className = "task-item";
    newListItem.append(taskValue);

    const link = document.createElement("a");
    link.className = "task-link delete-item";
    link.innerHTML = '<i class="far fa-times-circle"></i>';
    link.setAttribute("href", "#");
    newListItem.appendChild(link);
    list.appendChild(newListItem);


}
function storeInLS(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function taskRemove(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}
function clearTaskList(e){
    let x = list.childElementCount;
    console.log(x);
    if (confirm("Napewno ? nie będzie dało się wrócić")){
        while(list.firstChild){
        list.firstChild.remove();
        }
    }
    

}
function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    tasks.forEach(function(task){
        const newListItem = document.createElement("li");
        newListItem.className = "task-item";
        newListItem.appendChild(document.createTextNode(task));

        const link = document.createElement("a");
        link.className = "task-link delete-item";
        link.innerHTML = '<i class="far fa-times-circle"></i>';
        link.setAttribute("href", "#");
        newListItem.appendChild(link);
        list.appendChild(newListItem);
    });
}

//events
document.addEventListener('DOMContentLoaded', getTasks);
btnClear.addEventListener("click", clearTaskList);
list.addEventListener("click", taskRemove);
form.addEventListener("submit",noDefault);
form.addEventListener("keypress",function(e){
    if (e.key === "Enter"){
        submitInput();
    }
});

input.addEventListener("submit", noDefault);
btnSend.addEventListener("click", submitInput);






console.log(`:)`);


