import Task from "./task";
import todoList from "./todoList";

function addTaskButton() {
    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task-btn';

    addTaskBtn.textContent = 'add task';
    addTaskBtn.addEventListener('click', () => addTaskEvent());
    document.getElementById('main').appendChild(addTaskBtn);

    document.getElementById('form-task').addEventListener('submit', function(e) {
        e.preventDefault();
        taskFormOnSubmit(e);
    });
    document.getElementById('task-form-close').addEventListener('click', () => taskFormClose());
}

function addTaskEvent() {
    document.getElementById('task-popup-form').style.display = 'grid';
}

function taskFormClose() {
    document.getElementById('task-popup-form').style.display = 'none';
}

function taskFormOnSubmit(e) {
    const formObject = Object.fromEntries(new FormData(e.target).entries());
    const task = Task(formObject.name, formObject.description, formObject.dueDate, formObject.priority);
    todoList.getActiveProject().addTask(task);
    e.target.reset();
    taskFormClose();
}

export default addTaskButton;