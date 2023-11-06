const Project = (name) => {
    const project = {};

    project.name = name;

    project.taskContainer = document.createElement('div');
    project.taskContainer.id = `${project.name}-tasks`;
    document.getElementById('main').appendChild(project.taskContainer);

    project.tasks = [];
    project.addTask = (task) => {
        project.tasks.push(task);
    }
    project.removeTask = (task) => {
        project.tasks = project.tasks.filter(currentTask => currentTask !== task);
    }
    project.setTasks = (tasks) => {
        project.tasks = tasks;
    }
    project.getTasks = () => project.tasks;

    return project;
}

export default Project;