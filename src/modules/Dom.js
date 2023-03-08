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
    const projectView = document.getElementById('project-view');
    const newNode = createProjectViewEntry(project);
    appendNode(projectView, newNode);
  }

  return { createProjectNode, appendNode, createProjectViewEntry, populateProjectView };
})();

export default Dom;
