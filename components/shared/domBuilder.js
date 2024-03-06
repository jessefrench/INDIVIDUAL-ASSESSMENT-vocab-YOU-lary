import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
    <div id="navigation"></div>
    <div id="filter"></div>
    <div id="form-container"></div>
    <div id="cards"></div>
  </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
