import todoList from "./todoList";
import format from "date-fns/format";

function renderProject(project) {
    const projectContainer = document.createElement('li');
    projectContainer.id = project.name;

    const projectIcon = document.createElement('div');
    projectIcon.classList.add('project-icon');
    const projectIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    projectIconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    projectIconSvg.setAttribute("viewBox", "0 0 24 24");
    projectIconSvg.innerHTML = '<path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 8H9V12H8V9H7V8M10 17V18H7V17.08L9 15H7V14H9.25C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10M11 4C11 3.45 11.45 3 12 3S13 3.45 13 4 12.55 5 12 5 11 4.55 11 4M17 17H12V15H17V17M17 11H12V9H17V11Z" />';
    projectIcon.appendChild(projectIconSvg);

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

    projectContainer.appendChild(projectIcon);
    projectContainer.appendChild(projectName);

    projectContainer.addEventListener('click', function() {
        todoList.setActiveProject(project); //change active project to new project when clicked
    });

    document.getElementById('sidebar-nav').appendChild(projectContainer);

    project.tasks.forEach(task => {
        renderTask(task, project);
    });
}

function renderTask(task, project) {
    const taskContainer = document.createElement('div');

    const taskName = document.createElement('h3');
    taskName.textContent = task.name;

    const taskDueDate = document.createElement('div');
    taskDueDate.classList.add('task-date');
    taskDueDate.textContent = format(task.dueDate, 'MMM do');

    switch (Number(task.priority)) {
        case 1:
            taskContainer.classList.add('low-priority');
            break;
    
        case 2:
            taskContainer.classList.add('medium-priority');
            break;

        case 3:
            taskContainer.classList.add('high-priority');
            break;
    }

    const taskCompleted = document.createElement('input');
    taskCompleted.type = 'checkbox';
    taskCompleted.addEventListener('change', () => {
        task.completed = !task.completed;
        taskContainer.classList.toggle('completed');
    });

    if (task.completed) { //add class if task is completed for styling
        taskContainer.classList.add('completed');
    }

    const deleteTaskBtn = document.createElement('button');
    const deleteTaskSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    deleteTaskSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    deleteTaskSvg.setAttribute("viewBox", "0 0 24 24");
    deleteTaskSvg.innerHTML = '<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />';
    deleteTaskBtn.appendChild(deleteTaskSvg);

    deleteTaskBtn.addEventListener('click', (e) => {
        const activeProject = todoList.getActiveProject();
        const tasks = activeProject.getTasks();
        tasks.forEach(currentTask => {
            if(task === currentTask) {
                activeProject.removeTask(task);
                e.currentTarget.parentNode.remove();
            }
        });
    });

    taskContainer.appendChild(taskCompleted);
    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(deleteTaskBtn);

    if (project) {
        project.taskContainer.appendChild(taskContainer);
    } else {
        todoList.getActiveProject().taskContainer.appendChild(taskContainer);
    }
}

export default renderProject;
export {renderTask};