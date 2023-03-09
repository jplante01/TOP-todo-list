import elements from './elements';

const Dom = (() => {
  function createProjectNode(project, arrayIdx) {
    const entry = document.createElement('li');
    entry.textContent = project.name;
    entry.dataset.id = arrayIdx;
    return entry;
  }

  function appendNode(element, node) {
    element.appendChild(node);
  }

  function createProjectViewEntry(project) {
    const li = document.createElement('li');
    li.textContent = project.name;
    li.id = 'project-view';
    return li;
  }

  function populateProjectView(project) {
    console.log(project);
    const projectView = document.getElementById('project-view');
    projectView.appendChild(elements.createProjectViewContent(project));
    // if current projectview === project return
    // if not delete projectview
    // populate projectview
    // const projectView = document.getElementById('project-view');
    // const newNode = createProjectViewEntry(project);
    // appendNode(projectView, newNode);
  }

  function switchMain(desiredView) {
    const targeted = document.getElementById(desiredView);
    if (targeted.classList.contains('hide')) {
      targeted.classList.remove('hide');
      const main = document.getElementById('main');
      const views = main.children;
      for (let i = 0; i < views.length; i++) {
        if (views[i].id !== desiredView) {
          views[i].classList.add('hide');
        }
      }
    }
  }
  return { createProjectNode, appendNode, createProjectViewEntry, populateProjectView, switchMain };
})();

export default Dom;
