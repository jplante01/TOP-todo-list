import DOM from './Dom';
import UI from './UI'
const events = (() => {
  function loadEventListeners() {
    const addProjectsButton = document.querySelector('#add-project-button');
    const newProjectFormContainer = document.getElementById('new-project-form-container');

    addProjectsButton.addEventListener('click', () => {
      newProjectFormContainer.classList.toggle('hide');
      console.log(newProjectFormContainer);
    });
  }

  function addProjectListListener(element) {
    element.addEventListener('click', (e) => {
      const idx = e.target.dataset.id;
      DOM.populateProjectView(UI.projects[idx])
    });
  }

  return { loadEventListeners, addProjectListListener };
})();

export default events;
