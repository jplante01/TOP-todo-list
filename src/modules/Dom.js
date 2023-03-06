const Dom = (() => {
  function createProjectNode(project) {
    const entry = document.createElement('li');
    entry.textContent = project.name;
    return entry;
  }

  function appendNode(element, node) {
    element.appendChild(node);
  }
  return { createProjectNode, appendNode };
})();

export default Dom;
