import Notiflix, { Notify } from 'notiflix';
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
const signUpForm = document.querySelector('#sign-up-form');
const signInForm = document.querySelector('#sign-in-form');
const signInContent = document.querySelector('#signed-in-content');
const signOutBtn = document.querySelector('#sign-out-btn');

const showSignInContent = () => {
  signInForm.style.display = 'none';
  signUpForm.style.display = 'none';
  signWithGoogleBtn.style.display = 'none';
  signInContent.style.display = 'block';
};

const showSignInForm = () => {
  signInForm.style.display = 'block';
  signUpForm.style.display = 'block';
  signWithGoogleBtn.style.display = 'block';
  signInContent.style.display = 'none';
};

const handleAuthChanged = user => {
  if (user) {
    showSignInContent();
  } else {
    showSignInForm();
  }
};
// Nasłuchiwacz zmiany stanu zalogowania
onAuthStateChanged(auth, handleAuthChanged);

// Tworzenie nowego konta
function handleSubmitSignUpForm(e) {
  e.preventDefault();
  const { email, password } = e.target.elements;
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const welcome = document.createElement('h1');
      welcome.classList.add('WTX');
      welcome.textContent = `Hello ${user.email}, I am so happy to see You!`;
      signInContent.prepend(welcome);
      console.log(user);
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
}
// Logowonie za pomocą Emaila
const handleSubmitSignInForm = e => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const welcome = document.createElement('h1');
      welcome.classList.add('WTX');
      welcome.textContent = `Hello ${user.email}, I am so happy to see You!`;
      signInContent.prepend(welcome);
      console.log(user);
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
      const welcome = document.createElement('h1');
      welcome.classList.add('WTX');
      welcome.textContent = `Hello ${user.email}, I am so happy to see You!`;
      signInContent.prepend(welcome);
      Notiflix.Notify.success(`Hello ${user.displayName}`);
      console.log(user);
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
    document.querySelector('.WTX').remove();
    signUpForm.reset();
    signInForm.reset();
  });
};

signInForm.addEventListener('submit', handleSubmitSignInForm);
signUpForm.addEventListener('submit', handleSubmitSignUpForm);
signWithGoogleBtn.addEventListener('click', signInWithGoogle);
signOutBtn.addEventListener('click', handleSignOut);
