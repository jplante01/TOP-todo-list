const elements = (() => {
  function createHeader() {
    const header = document.createElement('header');
    header.id = 'header';
    const logo = document.createElement('div');
    logo.id = 'logo';
    logo.textContent = 'ToDo';
    header.appendChild(logo);
    return header;
  }

  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.classList = 'f-col';
    const nav = document.createElement('div');
    nav.classList = 'nav';
    sidebar.appendChild(nav);
    const navHeader = document.createElement('div');
    navHeader.classList = 'nav-header f-center';
    nav.appendChild(navHeader);
    const projectsButton = document.createElement('h1');
    projectsButton.textContent = 'Projects';
    projectsButton.id = 'projects-button';
    navHeader.appendChild(projectsButton);
    const addProjectButton = document.createElement('a');
    addProjectButton.id = 'add-project-button';
    addProjectButton.textContent = '+';
    navHeader.appendChild(addProjectButton);
    const projectsList = document.createElement('ul');
    projectsList.classList = 'projects-list f-col';
    nav.appendChild(projectsList);
    return sidebar;
  }

  function createMain() {
    const main = document.createElement('div');
    main.id = 'main';
    return main;
  }
  return { createHeader, createSidebar, createMain };
})();

export default elements;
