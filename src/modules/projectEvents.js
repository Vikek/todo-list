import Project from "./project";
import renderProject from "./render";
import todoList from "./todoList";

function projectFormClose() {
    const popupForm = document.getElementById('project-popup-form');
    popupForm.style.visibility = 'hidden';
    popupForm.style.opacity = 0;
    document.getElementById('form-project').reset();
}

function addProjectButton() {
    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project-btn';
    const text = document.createElement('p');
    text.textContent = 'add project';
    
    const plusSign = document.createElement('div');
    plusSign.classList.add('plus-sign');
    const plusSignSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    plusSignSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    plusSignSvg.setAttribute("viewBox", "0 0 24 24");
    plusSignSvg.innerHTML = '<path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />';
    plusSign.appendChild(plusSignSvg);

    addProjectBtn.appendChild(plusSign);
    addProjectBtn.appendChild(text);

    addProjectBtn.addEventListener('click', () => {
        const popupForm = document.getElementById('project-popup-form');
        popupForm.style.visibility = 'visible';
        popupForm.style.opacity = 1;
    });
    document.getElementById('sidebar').appendChild(addProjectBtn);

    document.getElementById('form-project').addEventListener('submit', (e) => {
        e.preventDefault();
        const formObject = Object.fromEntries(new FormData(e.target).entries());
        const project = Project(formObject.name);
        todoList.addProject(project);
        renderProject(project);
        e.target.reset();
        projectFormClose();
    });
    document.getElementById('project-form-close').addEventListener('click', () => projectFormClose());
}

export default addProjectButton;