import DOM from './Dom';

const events = (() => {
  function loadEventListeners() {
    const addProjectsButton = document.querySelector('#add-project-button');
    const newProjectFormContainer = document.getElementById('new-project-form-container');

    addProjectsButton.addEventListener('click', () => {
      newProjectFormContainer.classList.toggle('hide');
    });
  }

  function projectListListener(e) {
    // check if projectView is active (if not make active)
    DOM.switchMain('project-view');
    DOM.populateProjectView(e.target);
    // check if e.target matches current project view (if not populate)
  }

  return { loadEventListeners, projectListListener };
})();

export default events;
