let btn = document.getElementById("inputButton");
const inputTask = document.getElementById("inputTask");
let list = document.getElementById("list");


const addTask = () => {
    if(inputTask.value.trim() != ""){
        let newTask = document.createElement("li");
        let newBox = document.createElement("input");
        newBox.type = "checkbox";
        list.append(newTask);
        let taskText = document.createElement("span");
        taskText.textContent = inputTask.value.trim();
        taskText.classList.add("taskText");
        let dlt = document.createElement("button");
        dlt.textContent = "Delete";
        dlt.classList.add("dlt");
        newTask.append(newBox);
        newTask.append(taskText);
        newTask.append(dlt);
        inputTask.value = "";
        inputTask.focus();
        dlt.addEventListener("click", () => {
            newTask.remove();
        })
    }
}

btn.addEventListener("click", ()=>{
    addTask();
})

inputTask.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
       addTask();
    }
})