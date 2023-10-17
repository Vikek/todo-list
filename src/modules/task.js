const Task = (title, description, dueDate, priority) => {
    let task = {};

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;

    return task;
}

export default Task;