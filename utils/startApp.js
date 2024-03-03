import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbar from '../components/shared/navbar';

const startApp = (uid) => {
  domBuilder(uid);
  navbar();
  logoutButton();
};

export default startApp;
