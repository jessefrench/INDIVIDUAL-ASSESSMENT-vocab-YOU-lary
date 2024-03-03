import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbar from '../components/shared/navbar';
import filterButtons from '../components/buttons/filterButtons';

const startApp = (uid) => {
  domBuilder(uid);
  navbar();
  filterButtons();
  logoutButton();
};

export default startApp;
