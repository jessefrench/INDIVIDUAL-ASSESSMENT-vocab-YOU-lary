import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbar from '../components/shared/navbar';
import filterButtons from '../components/buttons/filterButtons';
import { getCards } from '../api/cardData';
import { showCards } from '../pages/cards';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (uid) => {
  domBuilder(uid);
  formEvents(uid);
  navbar();
  filterButtons();
  logoutButton();
  navEvents();
  getCards(uid).then(showCards);
};

export default startApp;
