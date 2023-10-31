import todoList from "./todoList";

function renderProject(project) {
    const projectContainer = document.createElement('li');
    projectContainer.id = project.name;

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

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
    taskDueDate.textContent = task.dueDate;

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
    //deleteTaskBtn.textContent = 'x';
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