const todoList = (() => {
    const projects = [];
    let activeProject;

    function addProject(project) {
        projects.push(project);
    }
    function setActiveProject(project) {
        if (activeProject === project) {return};
        const projectDiv = document.getElementById(project.name);
        if(activeProject) {
            activeProject.taskContainer.classList.remove('active');
            document.getElementById(activeProject.name).classList.remove('active');
        }
        activeProject = project;
        project.taskContainer.classList.add('active');
        projectDiv.classList.add('active');
    }
    function getActiveProject() {
        return activeProject;
    }

    return {addProject, setActiveProject, getActiveProject};
})()

export default todoList;