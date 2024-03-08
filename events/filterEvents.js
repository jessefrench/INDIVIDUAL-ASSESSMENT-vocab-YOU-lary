import { showCards } from '../pages/cards';
import {
  getCards,
  htmlCards,
  cssCards,
  jsCards
} from '../api/cardData';

const filterEvents = (uid) => {
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
};

export default filterEvents;
