import Project from "./project";
import renderProject from "./render";
import todoList from "./todoList";

function addProjectButton() {
    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project-btn';

    addProjectBtn.textContent = 'add project';
    addProjectBtn.addEventListener('click', () => addProjectEvent());
    document.getElementById('sidebar').appendChild(addProjectBtn);

    document.getElementById('form-project').addEventListener('submit', function(e) {
        e.preventDefault();
        projectFormOnSubmit(e);
    });
    document.getElementById('project-form-close').addEventListener('click', () => projectFormClose());
}

function addProjectEvent() {
    document.getElementById('project-popup-form').style.display = 'block';
}

function projectFormClose() {
    document.getElementById('project-popup-form').style.display = 'none';
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