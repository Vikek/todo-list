const todoList = (function() {
    let projects = [];
    let activeProject;

    function addProject(project) {
        projects.push(project);
    }
    function setActiveProject(project) {
        if(activeProject) {
            activeProject.taskContainer.classList.remove('active');
        }
        activeProject = project;
        project.taskContainer.classList.add('active');
    }
    function getActiveProject() {
        return activeProject;
    }

    return {addProject, setActiveProject, getActiveProject};
})()

export default todoList;