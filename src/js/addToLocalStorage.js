import Notiflix from 'notiflix';
const addToQueue = document.querySelector('.queue-btn');
const addToWatched = document.querySelector('.watched-btn');

let queueMovies = [];
let watchedMovies = [];
let movieId = [];
let displayCard = '';

const checkTheLocalStorage = event => {
  if (event.target.className === 'movie-card__image') {
    displayCard = event.target.parentNode.parentNode;
    movieId = event.target.parentNode.children[1].children[2].textContent;
    if (
      queueMovies.length === 0 &&
      JSON.parse(localStorage.getItem('added-to-queue')) !== null
    ) {
      queueMovies = JSON.parse(localStorage.getItem('added-to-queue'));
    }

    if (
      watchedMovies.length === 0 &&
      JSON.parse(localStorage.getItem('added-to-watched')) !== null
    ) {
      watchedMovies = JSON.parse(localStorage.getItem('added-to-watched'));
    }
  }
  if (queueMovies !== null && queueMovies.includes(movieId)) {
    addToQueue.textContent = 'removed form queue';
  } else {
    addToQueue.textContent = 'add to queue';
  }

  if (watchedMovies !== null && watchedMovies.includes(movieId)) {
    addToWatched.textContent = 'removed form watched';
  } else {
    addToWatched.textContent = 'add to watched';
  }
};

const queueStorage = event => {
  if (!queueMovies.includes(movieId)) {
    queueMovies.push(movieId);
    localStorage.setItem('added-to-queue', JSON.stringify(queueMovies));
  } else {
    let deleteQueue = queueMovies.indexOf(movieId);
    if (deleteQueue > -1) {
      queueMovies.splice(deleteQueue, 1);
      localStorage.setItem('added-to-queue', JSON.stringify(queueMovies));
      addToQueue.textContent = 'add to queue';
      return Notiflix.Notify.info('Movie removed from queue');
    }
  }
  addToQueue.textContent = 'removed form queue';
  return Notiflix.Notify.success('Movie added to queue');
};

const watchedStorage = event => {
  if (watchedMovies === null) {
    localStorage.setItem('added-to-watched', JSON.stringify(movieId));
    watchedMovies.push(movieId);
    addToWatched.textContent = 'removed form watched';
    return Notiflix.Notify.success('Movie added to watched');
  } else {
    if (!watchedMovies.includes(movieId)) {
      watchedMovies.push(movieId);
      localStorage.setItem('added-to-watched', JSON.stringify(watchedMovies));
    } else {
      let deleteWatched = watchedMovies.indexOf(movieId);
      if (deleteWatched > -1) {
        watchedMovies.splice(deleteWatched, 1);
        localStorage.setItem('added-to-watched', JSON.stringify(watchedMovies));
        addToWatched.textContent = 'add to watched';
        return Notiflix.Notify.info('Movie removed from watched');
      }
    }
    addToWatched.textContent = 'removed form watched';
    return Notiflix.Notify.success('Movie added to watched');
  }
};

addEventListener('click', checkTheLocalStorage);
addToQueue.addEventListener('click', queueStorage);
addToWatched.addEventListener('click', watchedStorage);
