const events = (() => {
  function loadEventListeners() {
    const addProjectsButton = document.querySelector('#add-project-button');
    const newProjectFormContainer = document.getElementById('new-project-form-container');
    addProjectsButton.addEventListener('click', () => {
      newProjectFormContainer.classList.toggle('hide');
      console.log(newProjectFormContainer);
    });
  }

  return { loadEventListeners };
})();

export default events;
