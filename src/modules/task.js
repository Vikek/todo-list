const Task = (name, description, dueDate, priority) => {
    let task = {};

    task.name = name;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.completed = false;
    task.setComplete = function (completed) {
        task.completed = completed;
    }

    return task;
}

export default Task;