import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbar from '../components/shared/navbar';
import filterButtons from '../components/buttons/filterButtons';
import { getCards } from '../api/cardData';
import { showCards } from '../pages/cards';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import domEvents from '../events/domEvents';

const startApp = (uid) => {
  domBuilder();
  domEvents(uid);
  formEvents(uid);
  navbar();
  filterButtons();
  logoutButton();
  navEvents(uid);
  getCards(uid).then((cards) => showCards(cards, uid));
};

export default startApp;
