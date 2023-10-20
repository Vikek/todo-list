const TodoList = () => {
    let todoList = {};

    todoList.projects = [];
    todoList.currentProject;
    todoList.setCurrentProject = function(project) {
        todoList.currentProject = project;
    }
    todoList.getCurrentProject = function() {return todoList.currentProject};
    todoList.addProject = function(project) {
        todoList.project.push(project);
    }

    return todoList;
}

export default TodoList;