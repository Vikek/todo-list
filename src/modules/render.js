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

    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(taskCompleted);

    if (project) {
        project.taskContainer.appendChild(taskContainer);
    } else {
        todoList.getActiveProject().taskContainer.appendChild(taskContainer);
    }
}

export default renderProject;
export {renderTask};