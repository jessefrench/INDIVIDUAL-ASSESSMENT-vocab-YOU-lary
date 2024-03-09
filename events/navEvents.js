import { signOut } from '../utils/auth';
import addCardForm from '../components/forms/addCardForm';
import { getCards } from '../api/cardData';
import { showCards } from '../pages/cards';
import filterButtons from '../components/buttons/filterButtons';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // click event for home button
    if (e.target.id.includes('home')) {
      getCards(uid).then((cards) => showCards(cards, uid));
      filterButtons();
    }

    // click event for showing form for adding a card
    if (e.target.id.includes('create-entry')) {
      addCardForm({ uid });
    }

    // click event for logout button
    if (e.target.id.includes('logout-button')) {
      signOut();
    }
  });
};

export default navEvents;
