import Task from "./task";
import { renderTask } from "./render";
import todoList from "./todoList";

function addTaskButton() {
    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task-btn';
    const text = document.createElement('p');
    text.textContent = 'add task';
    const addSign = document.createElement('div');
    addSign.classList.add('sign');
    addTaskBtn.appendChild(text);
    addTaskBtn.appendChild(addSign);

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
    const task = Task(formObject.name, formObject.description, formObject.dueDate, formObject.priority);
    todoList.getActiveProject().addTask(task);
    renderTask(task);
    e.target.reset();
    taskFormClose();
}

export default addTaskButton;