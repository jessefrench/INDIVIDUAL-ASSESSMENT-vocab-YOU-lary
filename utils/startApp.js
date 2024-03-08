import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbar from '../components/shared/navbar';
import filterButtons from '../components/buttons/filterButtons';
import { getCards } from '../api/cardData';
import { showCards } from '../pages/cards';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import filterEvents from '../events/filterEvents';

const startApp = (uid) => {
  domBuilder();
  navbar();
  logoutButton();
  filterButtons();
  domEvents(uid);
  navEvents(uid);
  formEvents(uid);
  filterEvents(uid);
  getCards(uid).then((cards) => showCards(cards, uid));
};

export default startApp;
