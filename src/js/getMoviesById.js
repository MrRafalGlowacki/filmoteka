import axios from 'axios';
import { Notify } from 'notiflix';
import { imageExists, getMovieYear } from './exportFunctions';

let movieID = '';
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const loader = document.querySelector('.loader');
const watchedBtn = document.querySelector('.watched-list-btn');
const queueBtn = document.querySelector('.queue-list-btn');
const main = document.querySelector('.main-box');
watchedBtn.style.backgroundColor = ' #ff6b01';

const getMoviesbyId = async movieID => {
  loader.style.display = 'block';
  try {
    let API_URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(API_URL);
    loader.style.display = 'none';

    return response.data;
  } catch (error) {
    loader.style.display = 'none';
    console.error(error);
  }
};

//watched
let watchedMovies = [];
getWatchedMovies();

async function getWatchedMovies() {
  queueBtn.removeAttribute('disabled');
  main.innerHTML = '';
  watchedBtn.style.backgroundColor = ' #ff6b01';
  queueBtn.style.backgroundColor = ' transparent';
  if (JSON.parse(localStorage.getItem('added-to-watched')) !== null) {
    if (JSON.parse(localStorage.getItem('added-to-watched')).length === 0) {
      Notify.info('There are no movies in your watched list!');
      loader.style.display = 'none';
    } else {
      watchedMovies = JSON.parse(localStorage.getItem('added-to-watched'));

      let watchedMoviesList = [];

      for (let i = 0; i < watchedMovies.length; i++) {
        let watchedMovieId = watchedMovies[i];

        let watchedMoviesItem = await getMoviesbyId(watchedMovieId);

        watchedMoviesList.push(watchedMoviesItem);
      }
      renderMovies(watchedMoviesList);
    }
    watchedBtn.setAttribute('disabled', true);
  } else {
    Notify.info('There are no movies in your watched list!');
  }
}

watchedBtn.addEventListener('click', event => {
  event.preventDefault();
  getWatchedMovies();
});

//queue

let queuedMovies = [];

async function getQueuedMovies() {
  watchedBtn.removeAttribute('disabled');
  main.innerHTML = '';
  watchedBtn.style.backgroundColor = 'transparent';
  queueBtn.style.backgroundColor = ' #ff6b01';
  if (JSON.parse(localStorage.getItem('added-to-queue')) !== null) {
    if (JSON.parse(localStorage.getItem('added-to-queue')).length === 0) {
      Notify.info('There are no movies in your queue!');
    } else {
      queuedMovies = JSON.parse(localStorage.getItem('added-to-queue'));
      let queuedMoviesList = [];

      for (let i = 0; i < queuedMovies.length; i++) {
        let queuedMovieId = queuedMovies[i];

        let queuedMoviesItem = await getMoviesbyId(queuedMovieId);
        queuedMoviesList.push(queuedMoviesItem);
      }
      renderMovies(queuedMoviesList);
    }
    queueBtn.setAttribute('disabled', true);
  } else {
    Notify.info('There are no movies in your queue!');
  }
}

queueBtn.addEventListener('click', event => {
  event.preventDefault();
  getQueuedMovies();
});

//render movies
function renderMovies(movies) {
  const getSingleMoviesGenre = genres => {
    let singleMovieGenres = '';
    genres.map(elem => {
      elem != genres[genres.length - 1]
        ? (singleMovieGenres = singleMovieGenres + elem.name + ', ')
        : (singleMovieGenres = singleMovieGenres + elem.name);
    });
    return singleMovieGenres;
  };
  const markup = movies
    .map(movie => {
      return `
<div class="movie-card">
  <img class="movie-card__image" alt="${movie.title} movie"src=${imageExists(
        'https://image.tmdb.org/t/p/w500',
        movie.poster_path
      )}>
  <div class="movie-card__label">
    <p class="movie-card__title">${movie.original_title}</p>
    <div>
    <span class="movie-card__genre-year"> ${getSingleMoviesGenre(
      movie.genres
    )}  | ${getMovieYear(movie.release_date)}</span> 
    <span class="movie-card__vote">${movie.vote_average.toFixed(1)}</span>
    
    </div>
    <p class="movie-card__id">${movie.id}</p> 
  </div>
</div>
`;
    })
    .join('');

  main.innerHTML += markup;
}
//<p class="movie-card__genre-year">${singleMovieGenres} | ${getMovieYear(
//movie.release_date
//)}</p>
