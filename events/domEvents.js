import { getCards, deleteCard } from '../api/cardData';
import { showCards } from '../pages/cards';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for deleting a book
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(uid).then(showCards);
        });
      }
    }
  });
};

export default domEvents;
