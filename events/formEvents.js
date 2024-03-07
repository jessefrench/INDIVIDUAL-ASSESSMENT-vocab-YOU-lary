import { createCard, getCards, updateCard } from '../api/cardData';
import { showCards } from '../pages/cards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // click event for submitting form for adding a card
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').value,
        timeSubmitted: Date(document.querySelector('#submit')),
        uid
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(uid).then(showCards);
        });
      });
    }

    // click event for editing a card
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').value,
        timeSubmitted: Date(document.querySelector('#submit')),
        firebaseKey
      };

      updateCard(payload).then(() => {
        getCards(uid).then(showCards);
      });
    }
  });
};

export default formEvents;
