const Project = (name) => {
    let project = {};

    project.name = name;

    project.tasks = [];
    project.addTask = function (task) {
        project.tasks.push(task);
    }
    project.setTasks = function (tasks) {
        project.tasks = tasks;
    }
    project.getTasks = function () {return project.tasks;}

    return project;
}

export default Project;