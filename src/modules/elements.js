const elements = (() => {
  function createHeader() {
    const header = document.createElement('header');
    header.classList = 'header';
    const logo = document.createElement('div');
    logo.id = 'logo';
    logo.textContent = 'ToDo';
    header.appendChild(logo);
    return header;
  }

  return { createHeader };
})();

export default elements;
