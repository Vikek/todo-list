import Task from "./task";
import { renderTask } from "./render";
import todoList from "./todoList";

function addTaskButton() {
    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task-btn';
    const text = document.createElement('p');
    text.textContent = 'add task';
    // const plusSign = document.createElement('span')
    // plusSign.textContent = '+';
    // plusSign.classList.add('plus-sign');
    const plusSign = document.createElement('div');
    plusSign.classList.add('plus-sign');
    const plusSignSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    plusSignSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    plusSignSvg.setAttribute("viewBox", "0 0 24 24");
    plusSignSvg.innerHTML = '<path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />';
    plusSign.appendChild(plusSignSvg);
    
    addTaskBtn.appendChild(plusSign);
    addTaskBtn.appendChild(text);

    addTaskBtn.addEventListener('click', () => addTaskEvent());
    document.getElementById('main').appendChild(addTaskBtn);

    document.getElementById('form-task').addEventListener('submit', function(e) {
        e.preventDefault();
        taskFormOnSubmit(e);
    });
    document.getElementById('task-form-close').addEventListener('click', () => taskFormClose());
}

function addTaskEvent() {
    const popupForm = document.getElementById('task-popup-form');
    popupForm.style.visibility = 'visible';
    popupForm.style.opacity = 1;
}

function taskFormClose() {
    const popupForm = document.getElementById('task-popup-form');
    popupForm.style.visibility = 'hidden';
    popupForm.style.opacity = 0;
    document.getElementById('form-task').reset();
}

function taskFormOnSubmit(e) {
    const formObject = Object.fromEntries(new FormData(e.target).entries());
    const task = Task(formObject.name, formObject.description, new Date(formObject.dueDate), formObject.priority);
    todoList.getActiveProject().addTask(task);
    renderTask(task);
    e.target.reset();
    taskFormClose();
}

export default addTaskButton;