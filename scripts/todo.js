const listContainer = document.getElementById("tab-container");

function newElement(){
	let todoText = prompt("Enter your task: ");

	if (todoText != "" && todoText != null) {
		createTask(todoText);												    //	Create the task using the text from the prompt
		saveTask();															    //	Save the new element
	} else {
		alert("Task cannot be empty!");
	}
}

function createTask(todoText){
    let newTask = document.createElement("div");							    //	Create a div using createElement
    let taskContent = document.createTextNode(todoText);					    //	Create the text to put inside the div

	newTask.classList.add("item");											    //	Add the item class to the div
    newTask.addEventListener("click", removeElement);						    //	Add the event listener to the 
    newTask.appendChild(taskContent);										    //	Append the text to the task
    listContainer.prepend(newTask);											    //	Add the text
}

function saveTask(){
	const savedTasks = [];													    //	Initilaise the saved tasks

    for (const element of listContainer.children){							    //	Loop through the container's children
        savedTasks.push(element.textContent);								    //	Push the saved tasks into the array using the text content
    }
    localStorage.setItem("taskItem", JSON.stringify(savedTasks));			    //	Save the tasks into local storage
}

function removeElement() {
    let isConfirmed = confirm("Remove this from the list?");				    //	Confirm the removal of the task

	if (isConfirmed == true){												    //	If the confirmation is true
        this.remove();														    //	Remove the current element
        saveTask();															    //	Save the existing tasks
    }
}

window.onload = () => {
    const savedTodo = JSON.parse(localStorage.getItem("taskItem")) || [];	    //	Get the task list

	for (let i = savedTodo.length - 1; i >= 0; i--) {						    //	Iterate through the saved local storage array
        createTask(savedTodo[i]);											    //	Create a task for each saved 
    }
}