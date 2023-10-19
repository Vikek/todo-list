import Project from "./modules/project";
import Task from "./modules/task";
import renderProject from "./modules/render";
import addProjectButton from "./modules/projectEvents";
import './styles.css';

const dailyProject = Project('daily');

const brushTeeth = Task('brush teeth', '', '11:00', 1);
const eatFood = Task('eat', 'pancakes', '19:00', 3);
const shower = Task('shower', '', '23:00', 2);

dailyProject.addTask(brushTeeth);
dailyProject.addTask(eatFood);
dailyProject.addTask(shower);

renderProject(dailyProject);

const weeklyProject = Project('weekly');

const finishProject = Task('finish project', 'make todo list', 'sunday', 3);

weeklyProject.addTask(finishProject);

renderProject(weeklyProject);

addProjectButton();

console.log(dailyProject);