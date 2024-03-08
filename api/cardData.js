import client from '../utils/client';

const endpoint = client.databaseURL;

// get cards
const getCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// get a single card
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// create cards
const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// update cards
const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// delete cards
const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// filter cards by category: HTML
const htmlCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const category = Object.values(data).filter((card) => card.category_id === '-NsB5pdOM1X9MT4lVcrc');
      resolve(category);
    })
    .catch(reject);
});

// filter cards by category: CSS
const cssCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const category = Object.values(data).filter((card) => card.category_id === '-NsB5pdPwsETWpDquMcd');
      resolve(category);
    })
    .catch(reject);
});

// filter cards by category: JS
const jsCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const category = Object.values(data).filter((card) => card.category_id === '-NsB5pdPwsETWpDquMce');
      resolve(category);
    })
    .catch(reject);
});

export {
  getCards,
  getSingleCard,
  createCard,
  updateCard,
  deleteCard,
  htmlCards,
  cssCards,
  jsCards
};
