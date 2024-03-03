import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbar from '../components/shared/navbar';
import filterButtons from '../components/buttons/filterButtons';
import getCards from '../api/cardData';
import { showCards } from '../pages/cards';

const startApp = (uid) => {
  domBuilder(uid);
  navbar();
  filterButtons();
  logoutButton();
  getCards(uid).then(showCards);
};

export default startApp;
