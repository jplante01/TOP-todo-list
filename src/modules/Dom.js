const Dom = (() => {
  function createProjectNode(project) {
    const entry = document.createElement('li');
    entry.textContent = project.name;
    return entry;
  }

  function appendNode(element, node) {
    element.appendChild(node);
  }

  function createProjectViewLi(project) {
    const li = document.createElement('li');
    
  }
  return { createProjectNode, appendNode };
})();

export default Dom;
