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
    return sidebar;
  }

  function createMain() {
    const main = document.createElement('div');
    main.id = 'main';
    return main;
  }

  function createNewProjectForm() {
    // create form container to be returned
    const formContainer = document.createElement('div');
    formContainer.id = 'new-project-form-container';
    formContainer.classList = 'f-col f-center hide';

    // create form element and append to form container
    const form = document.createElement('form');
    form.action = '#';
    form.method = 'post';
    form.id = 'new-project-form';
    formContainer.appendChild(form);

    // create and append form-child
    const formChild = document.createElement('div');
    formChild.classList = 'form-child';
    form.appendChild(formChild);

    // create label
    const label = document.createElement('label');

    // construct and append label for project-name
    label.htmlFor = 'name';
    label.textContent = 'name';
    form.lastChild.appendChild(label);

    // create input
    const input = document.createElement('input');

    // construct input for project-name
    input.type = 'text';
    input.id = 'name';
    input.name = 'name';
    form.lastChild.appendChild(input);

    // create another form-child
    const formChild2 = document.createElement('div');
    formChild2.classList = 'form-child';
    form.appendChild(formChild2);

    // create label
    const label2 = document.createElement('label');

    // construct and append label for project-name
    label2.htmlFor = 'due-date';
    label2.textContent = 'Due Date';
    form.lastChild.appendChild(label2);

    // create input
    const input2 = document.createElement('input');

    // construct input for project-name
    input2.type = 'date';
    input2.id = 'due-date';
    input2.name = 'due-date';
    form.lastChild.appendChild(input2);

    return formContainer;
  }

  function createProjectsList() {
    const container = document.createElement('ul');
    container.classList = 'f-col';
    container.id = 'projects-list';
    return container;
  }

  return {
    createHeader,
    createSidebar,
    createMain,
    createNewProjectForm,
    createProjectsList,
  };
})();

export default elements;
