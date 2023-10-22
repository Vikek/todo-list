import Project from "./project";
import renderProject from "./render";
import todoList from "./todoList";

function addProjectButton() {
    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project-btn';

    addProjectBtn.addEventListener('click', () => addProjectEvent());
    document.getElementById('sidebar').appendChild(addProjectBtn);

    document.getElementById('form-project').addEventListener('submit', function(e) {
        e.preventDefault();
        projectFormOnSubmit(e);
    });
    document.getElementById('project-form-close').addEventListener('click', () => projectFormClose());
}

function addProjectEvent() {
    const popupForm = document.getElementById('project-popup-form');
    popupForm.style.visibility = 'visible';
    popupForm.style.opacity = 1;
}

function projectFormClose() {
    const popupForm = document.getElementById('project-popup-form');
    popupForm.style.visibility = 'hidden';
    popupForm.style.opacity = 0;
    document.getElementById('form-project').reset();
}

function projectFormOnSubmit(e) {
    const formObject = Object.fromEntries(new FormData(e.target).entries());
    const project = Project(formObject.name);
    todoList.addProject(project);
    renderProject(project);
    e.target.reset();
    projectFormClose();
}

export default addProjectButton;