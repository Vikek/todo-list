function renderProject(project) {
    const projectContainer = document.createElement('div');

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;

    projectContainer.appendChild(projectName);

    project.tasks.forEach(task => {
        renderTask(task);
    });
    
    document.getElementById('sidebar').appendChild(projectContainer);
}

function renderTask(task) {
    const taskContainer = document.createElement('div');

    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.title;

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
        taskContainer.classList.add('completed');
    }

    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(taskPriority);
    document.getElementById('main').appendChild(taskContainer);
}

export default renderProject;