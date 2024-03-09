import { signIn } from '../../utils/auth';

const loginButton = () => {
  const domString = `
    <h1 class="card-title">Welcome to vocab-YOU-lary!</h1>
    <button id="google-auth" class="btn btn-success">Login</button>`;

  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
