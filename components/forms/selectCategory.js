import { getCategories } from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDom';

const selectCategory = (uid, categoryId) => {
  let domString = `
    <label for="category">Select a Category</label>
    <select class="form-control" id="category_id" required>
    <option value="">Select a Category</option>`;

  getCategories(uid).then((categoriesArray) => {
    categoriesArray.forEach((category) => {
      domString += `
        <option 
          value="${category.firebaseKey}" 
          ${categoryId === category.firebaseKey ? 'selected' : ''}>
            ${category.languageTech}
        </option>`;
    });
    console.warn(uid);
    domString += '</select>';
    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
