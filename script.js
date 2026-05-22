let btn = document.getElementById("inputButton");
const inputTask = document.getElementById("inputTask");
let list = document.getElementById("list");
let tasks = [];
if(localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

const addTask = ({id, text, completed}) => {
        let newTask = document.createElement("li");
        let newBox = document.createElement("input");
        newBox.type = "checkbox";
        let taskText = document.createElement("span");
        taskText.textContent = text;
        taskText.classList.add("taskText");
        let dlt = document.createElement("button");
        dlt.textContent = "Delete";
        dlt.classList.add("dlt");
        newTask.append(newBox);
        if(completed){
            newBox.checked = true;
            taskText.classList.add("doneTask");
        }
        newTask.append(taskText);
        newTask.append(dlt);
        list.append(newTask);
        newBox.addEventListener("change", () => {
            if(newBox.checked){
                taskText.classList.add("doneTask");
            }else{
                taskText.classList.remove("doneTask");
            }
            tasks.find(task => task.id === id).completed = newBox.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })
        dlt.addEventListener("click", () => {
            newTask.remove();
            tasks = tasks.filter(task => task.id !== id);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })
}

const createTask = () => {
    if(inputTask.value.trim() != ""){
       let task = {
            id: Date.now(),
            text: inputTask.value.trim(),
            completed: false
        };
        inputTask.value = "";
        inputTask.focus();
        addTask(task);
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

btn.addEventListener("click", ()=>{
   createTask();
})

inputTask.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
       createTask();
    }
})

for(let task of tasks){
    addTask({
        id: task.id,
        text: task.text,
        completed: task.completed
    });
}
