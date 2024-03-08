import { showCards } from '../pages/cards';
import addCardForm from '../components/forms/addCardForm';
import {
  getCards,
  getSingleCard,
  deleteCard,
  htmlCards,
  cssCards,
  jsCards
} from '../api/cardData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for deleting a book
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(uid).then((cards) => showCards(cards, uid));
        });
      }
    }

    // click event for editing/updating a card
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }

    // click event for show all button
    document.querySelector('#all-cards').addEventListener('click', () => {
      getCards(uid).then((cards) => showCards(cards, uid));
    });

    // click event for html button
    document.querySelector('#html-cards').addEventListener('click', () => {
      htmlCards(uid).then((cards) => showCards(cards, uid));
    });

    // click event for css button
    document.querySelector('#css-cards').addEventListener('click', () => {
      cssCards(uid).then((cards) => showCards(cards, uid));
    });

    // click event for js button
    document.querySelector('#js-cards').addEventListener('click', () => {
      jsCards(uid).then((cards) => showCards(cards, uid));
    });
  });
};

export default domEvents;
