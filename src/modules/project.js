const Project = (name, tasks) => {
    let project = {};

    project.name = name;
    project.tasks = tasks;

    return project;
}

export default Project;