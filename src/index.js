import todoList from "./modules/todoList";
import Project from "./modules/project";
import Task from "./modules/task";
import renderProject from "./modules/render";
import addProjectButton from "./modules/projectEvents";
import addTaskButton from "./modules/taskEvents";
import './styles.css';

////////////////daily
const dailyProject = Project('daily');

const brushTeeth = Task('brush teeth', '', '11:00', 1);
const eatFood = Task('eat', 'pancakes', '19:00', 3);
const shower = Task('shower', '', '23:00', 2);

dailyProject.addTask(brushTeeth);
dailyProject.addTask(eatFood);
dailyProject.addTask(shower);

todoList.addProject(dailyProject);
todoList.setActiveProject(dailyProject);

renderProject(dailyProject);


/////////////////daily
const weeklyProject = Project('weekly');

const finishProject = Task('finish project', 'make todo list', 'sunday', 3);

weeklyProject.addTask(finishProject);

todoList.addProject(weeklyProject);
renderProject(weeklyProject);

addProjectButton();
addTaskButton();

console.log(dailyProject);



