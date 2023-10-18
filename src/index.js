import Project from "./modules/project";
import Task from "./modules/task";
import renderProject from "./modules/render";

const dailyProject = Project('daily');

const brushTeeth = Task('brush teeth', '', '11:pm', 1);

dailyProject.addTask(brushTeeth);

renderProject(dailyProject);

console.log(dailyProject);