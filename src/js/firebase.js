import Notiflix from 'notiflix';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const signWithGoogleBtn = document.querySelector('#sign-in-google');
const form = document.querySelector('#sign-in-form');
const authModal = document.querySelector('.logIn-modal');
const signOutBtn = document.querySelector('#sign-out-btn');
const logInBtn = document.querySelector('#logIn');
const closeModalBtn = document.querySelector('#form-modal-close');
const formSwitchBtn = document.querySelector('.js-form-auth__type-switch');
const formSubmitBtn = document.querySelector('.js-form__submit');
const formTitle = document.querySelector('.js-form-auth__title');
let formType = 'authorization';
let userCheck;

// otwieranie okna autoryzacji na library.html, jeśli niema zalogowania.
const OpenAuthModalOnLibrary = () => {
  if (userCheck === 'no' && window.location.href.endsWith('library.html')) {
    setTimeout(() => {
      showAuthForm();
    }, 1200);
  } else return;
};

// zachowanie po zalogowaniu
const showSignInContent = () => {
  userCheck = 'yes';
  form.style.display = 'none';
  signWithGoogleBtn.style.display = 'none';
  signOutBtn.classList.remove('is-hidden');
  logInBtn.classList.add('is-hidden');
  authModal.classList.add('is-hidden');
};
// potrzebne do zalogowania
const showSignInForm = () => {
  userCheck = 'no';
  form.style.display = 'block';
  signWithGoogleBtn.style.display = 'block';
  signOutBtn.classList.add('is-hidden');
  logInBtn.classList.remove('is-hidden');
};
// zmiana stanu zalogowania
const handleAuthChanged = user => {
  if (user) {
    showSignInContent();
  } else {
    showSignInForm();
  }
};
// Nasłuchiwacz zmiany stanu zalogowania
onAuthStateChanged(auth, handleAuthChanged);

// pokaż modal
const showAuthForm = async () => {
  authModal.classList.remove('is-hidden');
  logInBtn.classList.add('is-hidden');
  closeModalBtn.addEventListener('click', closeModalhandler);
  formSwitchBtn.addEventListener('click', formUpdate);
  form.addEventListener('submit', handleFormSubmit);
  signWithGoogleBtn.addEventListener('click', signInWithGoogle);
  addEventListener('keydown', clickEscape);
  addEventListener('click', closeByClick);
};
// zamknij modal
const closeModalhandler = () => {
  authModal.classList.add('is-hidden');
  logInBtn.classList.remove('is-hidden');
  closeModalBtn.removeEventListener('click', closeModalhandler);
  formSwitchBtn.removeEventListener('click', formUpdate);
  form.removeEventListener('submit', handleFormSubmit);
  signWithGoogleBtn.removeEventListener('click', signInWithGoogle);
  removeEventListener('keydown', clickEscape);
  removeEventListener('click', closeByClick);
};
//zamknij na esc
const clickEscape = event => {
  if (event.keyCode === 27) {
    closeModalhandler();
  }
};
// zamknij na klik poza oknem modalnym
const closeByClick = event => {
  if (
    !event.target.classList.contains('is-hidden') &&
    !event.target.closest('.auth-modal')
  ) {
    closeModalhandler();
  }
};
// Tworzenie nowego konta
const registrationNewUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('New user: ' + user.email);
      Notiflix.Notify.success('New user account logged in');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
      Notiflix.Notify.failure(errorMessage);
      // ..
    });
};
// Logowonie za pomocą Emaila
const userLogIn = (email, password) => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('user: ' + user.email);
      Notiflix.Notify.success('You are log in');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
      Notiflix.Notify.failure(errorMessage);
    });
};
// Logowanie za pomocą Google
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      Notiflix.Notify.success(`Hello ${user.displayName}`);
      console.log('user: ' + user.email);
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log({ errorCode, errorMessage, email, credential });
      Notiflix.Notify.failure(errorMessage);
    });
};
// wylogowanie
const handleSignOut = () => {
  signOut(auth).then(() => {
    form.reset();
  });
};
// zmiana formularza
const formUpdate = () => {
  const conditionsInfo = document.querySelector('.js-conditions');
  // obsługa widoczności warunków i polityki prywatności
  if (formType === 'authorization') {
    formType = 'registration';
    conditionsInfo.removeAttribute('hidden');
  } else {
    formType = 'authorization';
    conditionsInfo.setAttribute('hidden', '');
  }

  const formSwitchBtnText =
    formType === 'authorization' ? 'Registration' : 'Sign In';
  const textSubmit = formType === 'authorization' ? 'Sign In' : 'Register now';
  const formTitleText =
    formType === 'authorization' ? 'Sign In' : 'Registration';
  // zmiana tytułu fromularza i tekstu guzików
  formSwitchBtn.textContent = formSwitchBtnText;
  formSubmitBtn.textContent = textSubmit;
  formTitle.textContent = formTitleText;
  form.reset();
};
// obsługa formularza logowania
const handleFormSubmit = e => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  if (formType === 'registration') {
    registrationNewUser(email, password);
    formUpdate();
  } else if (formType === 'authorization') {
    userLogIn(email, password);
  }
};

signOutBtn.addEventListener('click', handleSignOut);
logInBtn.addEventListener('click', showAuthForm);
window.onload = OpenAuthModalOnLibrary;
