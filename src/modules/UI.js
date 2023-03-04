import elements from './elements';
import Project from './Project';
import Task from './Task';
import Note from './Note';
// import DOM from './Dom';

const UI = (() => {
  const loadHomePage = () => {
    const content = document.getElementById('content');
    content.appendChild(elements.createHeader());
    content.appendChild(elements.createSidebar());
    content.appendChild(elements.createMain());
    const sidebar = document.getElementById('sidebar');
    sidebar.appendChild(elements.createNewProjectForm());
    sidebar.appendChild(elements.createProjectList());
  };

  const projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const deleteProject = (projectIdx) => {
    projects.splice(projectIdx, 1);
  };

  /* TEST/DELETE project -> task -> note */
  addProject(Project('Coding'));
  const testProject = projects[0];
  testProject.addTask(Task('Study T.O.P.'));
  testProject.addTask(Task('Code a project'));
  const testTask = projects[0].getTasks()[0];
  testTask.addNote('Open the webpage'); // not a function
  // console.log(testTask.getNotes());
  // console.log(testProject);
  /* TEST/DELETE */
  return {
    loadHomePage,
    addProject,
    deleteProject,
  };
})();

export default UI;
