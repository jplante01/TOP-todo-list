const elements = (() => {
  function createHeader() {
    const header = document.createElement('header');
    header.classList = 'header';
    return header;
  }

  return { createHeader };
})();

export default elements;
