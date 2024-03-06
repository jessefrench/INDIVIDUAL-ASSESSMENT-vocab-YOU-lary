import addCardForm from '../components/forms/addCardForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for showing form for adding a card
    if (e.target.id.includes('create-entry')) {
      addCardForm({ uid });
    }
  });
};

export default domEvents;
