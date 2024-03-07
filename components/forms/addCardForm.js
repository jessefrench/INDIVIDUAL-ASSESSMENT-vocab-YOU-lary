import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectCategory from './selectCategory';

const addCardForm = (card = {}) => {
  clearDom();
  const domString = `
    <form id="${card.firebaseKey ? `update-card--${card.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Card Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${card.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Card Definition" id="definition" style="height: 100px">${card.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-category"></div>
      <button type="submit" id="submit" class="btn btn-primary">Submit Card</button>
    </form>`;
  renderToDOM('#form-container', domString);
  selectCategory(`${card.uid}`, `${card.category_id || ''}`);
};

export default addCardForm;
