import todoList from "./modules/todoList";
import Project from "./modules/project";
import Task from "./modules/task";
import renderProject from "./modules/render";
import addProjectButton from "./modules/projectEvents";
import addTaskButton from "./modules/taskEvents";

import GithubIcon from './assets/github-mark-white.png';

import './styles/styles.css';
import './styles/main.css';
import './styles/header.css';
import './styles/sidebar.css';
import './styles/footer.css';

////////////////daily
const dailyProject = Project('daily');

const brushTeeth = Task('brush teeth', '', '11:00', 1);
const eatFood = Task('eat', 'pancakes', '19:00', 3);
const shower = Task('shower', '', '23:00', 2);

dailyProject.addTask(brushTeeth);
dailyProject.addTask(eatFood);
dailyProject.addTask(shower);

todoList.addProject(dailyProject);
renderProject(dailyProject);
todoList.setActiveProject(dailyProject);

//renderProject(dailyProject);


/////////////////daily
/////////////////weekly
const weeklyProject = Project('weekly');

const finishProject = Task('finish project', 'make todo list', 'sunday', 3);

weeklyProject.addTask(finishProject);

todoList.addProject(weeklyProject);
renderProject(weeklyProject);
/////////////////weekly

addProjectButton();
addTaskButton();

/////////////////footer
const githubIcon = document.createElement('img');
githubIcon.src = GithubIcon;
document.getElementById('github-link').appendChild(githubIcon);