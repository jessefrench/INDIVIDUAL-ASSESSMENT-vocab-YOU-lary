import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getCategories } from '../api/categoryData';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#cards', domString);
};

const showCards = async (array, uid) => {
  clearDom();
  if (array.length <= 0) {
    emptyCards();
  } else {
    let domString = '';
    const categories = await getCategories(uid);
    array.forEach((card) => {
      const singleCategory = categories.find((i) => i.firebaseKey === card.category_id);
      domString += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <h6 class="card-title">Category: ${singleCategory.languageTech}</h6>
            <p class="card-text">${card.definition}</p>
            <i id="view-card-btn--${card.firebaseKey}" class="btn btn-success"><span id="view-card-btn--${card.firebaseKey}" class="fas fa-eye"></span></i>
            <i id="edit-card-btn--${card.firebaseKey}" class="btn btn-info"><span id="edit-card-btn--${card.firebaseKey}" class="fas fa-edit"></span></i>
            <i id="delete-card-btn--${card.firebaseKey}" class="btn btn-danger"><span id="delete-card-btn--${card.firebaseKey}" class="fas fa-trash-alt"></span></i>
          </div>
        </div>`;
    });
    renderToDOM('#cards', domString);
  }
};

export { showCards, emptyCards };
