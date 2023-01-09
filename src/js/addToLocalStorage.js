import Notiflix from 'notiflix';
const addToQueue = document.querySelector('.queue-btn');
const addToWatched = document.querySelector('.watched-btn');
const modalOpen = document.querySelector('.modal');
const modalId = document.querySelector('.modal__id');

let queueMovies = [];
let watchedMovies = [];
let checkId = [];

const modalIdCheck = event => {
  if (event.target.className === 'movie-card__image') {
    checkId = event.target.parentNode.children[1].children[2].textContent;
    const queueStorageId = localStorage.getItem(
      'added-to-queue',
      JSON.stringify(queueMovies)
    );

    const watchedStorageId = localStorage.getItem(
      'added-to-watched',
      JSON.stringify(watchedMovies)
    );

    if (queueStorageId.includes(checkId)) {
      addToQueue.textContent = 'removed form queue';
    } else {
      addToQueue.textContent = 'add to queue';
    }

    if (watchedStorageId.includes(checkId)) {
      addToWatched.textContent = 'removed form watched';
    } else {
      addToWatched.textContent = 'add to watched';
    }
  }
};

const queueStorage = event => {
  const queueMovieId = modalId.textContent;
  if (!queueMovies.includes(queueMovieId)) {
    queueMovies.push(queueMovieId);
    localStorage.setItem('added-to-queue', JSON.stringify(queueMovies));
  } else {
    let deleteQueue = queueMovies.indexOf(queueMovieId);
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
  const watchedMovieId = modalId.textContent;

  if (!watchedMovies.includes(watchedMovieId)) {
    watchedMovies.push(watchedMovieId);
    localStorage.setItem('added-to-watched', JSON.stringify(watchedMovies));
  } else {
    let deleteWatched = watchedMovies.indexOf(watchedMovieId);
    if (deleteWatched > -1) {
      watchedMovies.splice(deleteWatched, 1);
      localStorage.setItem('added-to-watched', JSON.stringify(watchedMovies));
      addToWatched.textContent = 'add to watched';
      return Notiflix.Notify.info('Movie removed from watched');
    }
  }
  addToWatched.textContent = 'removed form watched';
  return Notiflix.Notify.success('Movie added to watched');
};

addEventListener('click', modalIdCheck);
addToQueue.addEventListener('click', queueStorage);
addToWatched.addEventListener('click', watchedStorage);
