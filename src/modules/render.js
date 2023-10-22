import todoList from "./todoList";

function renderProject(project) {
    const projectContainer = document.createElement('div');
    projectContainer.id = project.name;

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

    projectContainer.appendChild(projectName);

    projectContainer.addEventListener('click', function() {
        todoList.setActiveProject(project); //change active project to new project when clicked
    });

    document.getElementById('sidebar').appendChild(projectContainer);

    project.tasks.forEach(task => {
        renderTask(task, project);
    });
}

function renderTask(task, project) {
    const taskDiv = document.createElement('div');

    const taskName = document.createElement('h3');
    taskName.textContent = task.name;

    const taskDueDate = document.createElement('div');
    taskDueDate.textContent = task.dueDate;

    const taskPriority = document.createElement('div');
    switch (task.priority) {
        case 1:
            taskPriority.classList.add('low-priority');
            break;
    
        case 2:
            taskPriority.classList.add('medium-priority');
            break;

        case 3:
            taskPriority.classList.add('high-priority');
            break;
    }

    if (task.completed) { //add class if task is completed for styling
        taskDiv.classList.add('completed');
    }

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDueDate);
    taskDiv.appendChild(taskPriority);

    if (project) {
        project.taskContainer.appendChild(taskDiv);
    } else {
        todoList.getActiveProject().taskContainer.appendChild(taskDiv);
    }
}

export default renderProject;
export {renderTask};