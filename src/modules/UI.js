import elements from './elements';
import Project from './Project';
import Task from './Task';
import Note from './Note';
import DOM from './Dom';
import events from './events';

const UI = (() => {
  const content = document.getElementById('content');
  // target nodes are created in loadHomePage();
  let sidebar;
  let newProjectForm;
  let projectsList;
  let main;
  let projectView;
  let taskView;

  function loadHomePage() {
    content.appendChild(elements.createHeader());
    content.appendChild(elements.createSidebar());
    content.appendChild(elements.createMain());
    sidebar = document.getElementById('sidebar');
    sidebar.appendChild(elements.createNewProjectForm());
    newProjectForm = document.getElementById('new-project-form');
    sidebar.appendChild(elements.createProjectsList());
    projectsList = document.getElementById('projects-list');
    main = document.getElementById('main');
    main.appendChild(elements.createProjectView());
    projectView = document.getElementById('project-view');
    main.appendChild(elements.createTaskView());
    taskView = document.getElementById('task-view');
  }

  const projects = [];

  function addProject(project) {
    projects.push(project);
  }

  const deleteProject = (projectIdx) => {
    projects.splice(projectIdx, 1);
  };

  /* TESTING */
  addProject(Project('coding', new Date(2023, 3, 10)));
  addProject(Project('working out'));
  /* TESTING */

  function loadProjects() {
    projects.forEach((project, arrayIdx) => {
      const newNode = DOM.createProjectNode(project, arrayIdx);
      newNode.addEventListener('click', events.projectListListener);
      DOM.appendNode(projectsList, newNode);
    });
  }

  function initialize() {
    loadHomePage();
    loadProjects();
    events.loadEventListeners();
  }

  return {
    loadHomePage,
    addProject,
    deleteProject,
    initialize,
  };
})();

export default UI;
