const Project = (name) => {
    let project = {};

    project.name = name;

    project.taskContainer = document.createElement('div');
    project.taskContainer.id = `${project.name}-tasks`;
    document.getElementById('main').appendChild(project.taskContainer);

    project.tasks = [];
    project.addTask = function(task) {
        project.tasks.push(task);
    }
    project.removeTask = function(task) {
        project.tasks = project.tasks.filter(currentTask => currentTask != task);
    }
    project.setTasks = function(tasks) {
        project.tasks = tasks;
    }
    project.getTasks = function() {return project.tasks;}

    return project;
}

export default Project;