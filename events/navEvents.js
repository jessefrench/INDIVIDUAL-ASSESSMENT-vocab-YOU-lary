import { signOut } from '../utils/auth';

const navEvents = () => {
  // click event for logout button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navEvents;
