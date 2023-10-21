const todoList = (function() {
    let projects = [];
    let activeProject;

    function addProject(project) {
        projects.push(project);
    }
    function setActiveProject(project) {
        activeProject = project;
    }
    function getActiveProject() {
        return activeProject;
    }

    return {addProject, setActiveProject, getActiveProject};
})()

export default todoList;