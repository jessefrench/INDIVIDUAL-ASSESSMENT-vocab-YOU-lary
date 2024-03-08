import renderToDOM from '../../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class="btn-group" role="group">
    <button type="button" id="all-cards" class="btn btn-primary">Show All</button>
    <button type="button" id="html-cards" class="btn btn-primary">HTML</button>
    <button type="button" id="css-cards" class="btn btn-primary">CSS</button>
    <button type="button" id="js-cards" class="btn btn-primary">JavaScript</button>
  </div>`;
  renderToDOM('#filter', domString);
};

export default filterButtons;
