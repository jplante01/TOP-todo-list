const UI = (() => {

  const loadHomePage = () => {
    
    const content = document.getElementById('content');
    const testP = document.createElement('p');
    testP.textContent = 'hi there';
    testP.classList = 'red';
    content.appendChild(testP);

  };
  
  return {
    loadHomePage
  }
})();

export default UI
