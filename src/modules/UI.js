import elements from './elements';

const UI = (() => {
  const loadHomePage = () => {
    const content = document.getElementById('content');
    content.appendChild(elements.createHeader());
    content.appendChild(elements.createSidebar());
    content.appendChild(elements.createMain());
  };

  return {
    loadHomePage,
  };
})();

export default UI;
