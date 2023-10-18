const Task = (title, description, dueDate, priority) => {
    let task = {};

    task.title = title;
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