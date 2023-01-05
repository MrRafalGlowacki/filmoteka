import Notiflix from 'notiflix';
const addToQueue = document.querySelector('.queue-btn');
const addToWatched = document.querySelector('.watched-btn');
const modalId = document.querySelector('.modal__id');

let queueMovies = [];
let watchedMovies = [];

const queueStorage = event => {
  const queueMovieId = modalId.textContent;

  if (!queueMovies.includes(queueMovieId)) {
    queueMovies.push(queueMovieId);
    localStorage.setItem('added-to-queue', JSON.stringify(queueMovies));
    let deleteWatched = watchedMovies.indexOf(queueMovieId);
    if (deleteWatched > -1) {
      watchedMovies.splice(deleteWatched, 1);
      localStorage.setItem('added-to-watched', JSON.stringify(watchedMovies));
      return Notiflix.Notify.info(
        'Movie remove from watched and added to queue'
      );
    }
    return Notiflix.Notify.success('Movie added to queue');
  } else {
    return Notiflix.Notify.failure('Movie already in queue');
  }
};

const watchedStorage = event => {
  const watchedMovieId = modalId.textContent;

  if (!watchedMovies.includes(watchedMovieId)) {
    watchedMovies.push(watchedMovieId);
    localStorage.setItem('added-to-watched', JSON.stringify(watchedMovies));
    let deleteQueue = queueMovies.indexOf(watchedMovieId);
    if (deleteQueue > -1) {
      queueMovies.splice(deleteQueue, 1);
      localStorage.setItem('added-to-queue', JSON.stringify(queueMovies));
      return Notiflix.Notify.info(
        'Movie remove from queue and added to watched'
      );
    }
    return Notiflix.Notify.success('Movie added to watched');
  } else {
    return Notiflix.Notify.failure('Movie already in watched');
  }
};

addToQueue.addEventListener('click', queueStorage);
addToWatched.addEventListener('click', watchedStorage);
