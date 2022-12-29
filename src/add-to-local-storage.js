const addToQueue = document.querySelector('.queue-btn');
const addToWatched = document.querySelector('.watched-btn');

const queueStorage = event => {
  const movieCard = 'exampleMovieCard';
  const movieInformation = 'exampleMovieInformation';
  const movie = [movieCard, movieInformation];
  if (localStorage.getItem('added-to-queue') !== null) {
    const storageMovie = localStorage.getItem('added-to-queue');
    if (JSON.parse(storageMovie)[1] === movieInformation) {
      return alert('movie already in queue');
    }
  }
  localStorage.setItem('added-to-queue', JSON.stringify(movie));
  alert('movie added to queue');
};

const watchedStorage = event => {
  const movieCard = 'exampleMovieCard';
  const movieInformation = 'exampleMovieInformation';
  const movie = [movieCard, movieInformation];
  if (localStorage.getItem('added-to-watched') !== null) {
    const storageMovie = localStorage.getItem('added-to-watched');
    if (JSON.parse(storageMovie)[1] === movieInformation) {
      return alert('movie already in watched');
    }
  }
  localStorage.setItem('added-to-watched', JSON.stringify(movie));
  alert('movie added to watched');
};

addToQueue.addEventListener('click', queueStorage);
addToWatched.addEventListener('click', watchedStorage);
