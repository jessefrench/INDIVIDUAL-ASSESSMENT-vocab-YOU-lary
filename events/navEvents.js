import { signOut } from '../utils/auth';

import addCardForm from '../components/forms/addCardForm';

const navEvents = (uid) => {
  // click event for logout button
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // click event for showing form for adding a card
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry')) {
      addCardForm({ uid });
    }
  });
};

export default navEvents;
