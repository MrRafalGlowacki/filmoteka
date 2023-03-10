import axios from 'axios';
import { imageExists, getMovieYear } from './exportFunctions';
import * as pagination from './pagination';
import { onTopScroll } from './toTopBtn';

let movieID = '';
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const loader = document.querySelector('.loader');
const watchedBtn = document.querySelector('.watched-list-btn');
const queueBtn = document.querySelector('.queue-list-btn');
const main = document.querySelector('.main-box');
const addToQueue = document.querySelector('.queue-btn');
const addToWatched = document.querySelector('.watched-btn');

watchedBtn.style.backgroundColor = ' #ff6b01';

const itemsPerPage = 20;

const getMoviesbyId = async movieID => {
  loader.style.display = 'block';
  try {
    let API_URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(API_URL);
    loader.style.display = 'none';
    loader.style.overflow = 'hidden';

    return response.data;
  } catch (error) {
    loader.style.display = 'none';
    loader.style.overflow = 'hidden';
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
  watchedBtn.style.backgroundColor = ' #ff6b01';
  queueBtn.textContent = `QUEUE`;
  let totalPages = 0;
  let currentPage = 1;

  pagination.getPaginationNumbers(totalPages);
  pagination.setCurrentPage(currentPage);

  if (JSON.parse(localStorage.getItem('added-to-watched')) !== null) {
    let watchedMoviesNumber = JSON.parse(
      localStorage.getItem('added-to-watched')
    ).length;

    if (JSON.parse(localStorage.getItem('added-to-watched')).length === 0) {
      main.insertAdjacentHTML(
        'beforeend',
        `<p class="alert">There are no movies in your watched list!</p>`
      );
      watchedBtn.textContent = `WATCHED`;
      loader.style.display = 'none';
    } else {
      main.innerHTML = '';
      watchedMovies = JSON.parse(localStorage.getItem('added-to-watched'));

      let watchedMoviesList = [];
      let paginatedList;

      for (let i = 0; i < watchedMovies.length; i++) {
        let watchedMovieId = watchedMovies[i];

        let watchedMoviesItem = await getMoviesbyId(watchedMovieId);

        watchedMoviesList.push(watchedMoviesItem);
      }

      totalPages = Math.ceil(watchedMoviesList.length / itemsPerPage);

      paginatedList = watchedMoviesList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
      renderMovies(paginatedList);

      pagination.getPaginationNumbers(totalPages);
      pagination.setCurrentPage(currentPage);

      pagination.prevButton.addEventListener('click', async () => {
        pagination.setCurrentPage(--currentPage);
        paginatedList = watchedMoviesList.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        main.innerHTML = '';
        renderMovies(paginatedList);
        onTopScroll();
      });
      pagination.nextButton.addEventListener('click', async () => {
        pagination.setCurrentPage(++currentPage);
        paginatedList = watchedMoviesList.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        main.innerHTML = '';
        renderMovies(paginatedList);
        onTopScroll();
      });
      document.querySelectorAll('.pagination__number').forEach(button => {
        const pageIndex = Number(button.getAttribute('page-index'));
        if (pageIndex) {
          button.addEventListener('click', async () => {
            pagination.setCurrentPage(pageIndex);
            currentPage = pageIndex;

            paginatedList = watchedMoviesList.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            );
            main.innerHTML = '';

            renderMovies(paginatedList);
            onTopScroll();
          });
        }
      });

      watchedBtn.textContent = `WATCHED : ${watchedMoviesNumber}`;
    }
  } else {
    main.insertAdjacentHTML(
      'beforeend',
      `<p class="alert">There are no movies in your watched list!</p>`
    );
    watchedBtn.textContent = `WATCHED`;
    loader.style.display = 'none';
  }
  watchedBtn.setAttribute('disabled', true);
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
  watchedBtn.textContent = `WATCHED`;
  let totalPages = 0;
  let currentPage = 1;

  pagination.getPaginationNumbers(totalPages);
  pagination.setCurrentPage(currentPage);

  if (JSON.parse(localStorage.getItem('added-to-queue')) !== null) {
    let queuedMoviesNumber = JSON.parse(
      localStorage.getItem('added-to-queue')
    ).length;

    if (JSON.parse(localStorage.getItem('added-to-queue')).length === 0) {
      main.insertAdjacentHTML(
        'beforeend',
        `<p class="alert">There are no movies in your queue!</p>`
      );
      queueBtn.textContent = `QUEUE`;
      loader.style.display = 'none';
    } else {
      main.innerHTML = '';
      queuedMovies = JSON.parse(localStorage.getItem('added-to-queue'));
      let queuedMoviesList = [];
      let paginatedList;

      for (let i = 0; i < queuedMovies.length; i++) {
        let queuedMovieId = queuedMovies[i];

        let queuedMoviesItem = await getMoviesbyId(queuedMovieId);

        queuedMoviesList.push(queuedMoviesItem);
      }

      totalPages = Math.ceil(queuedMoviesList.length / itemsPerPage);

      paginatedList = queuedMoviesList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
      renderMovies(paginatedList);

      pagination.getPaginationNumbers(totalPages);
      pagination.setCurrentPage(currentPage);

      pagination.prevButton.addEventListener('click', async () => {
        pagination.setCurrentPage(--currentPage);
        paginatedList = queuedMoviesList.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        main.innerHTML = '';
        renderMovies(paginatedList);
        onTopScroll();
      });
      pagination.nextButton.addEventListener('click', async () => {
        pagination.setCurrentPage(++currentPage);
        paginatedList = queuedMoviesList.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        main.innerHTML = '';
        renderMovies(paginatedList);
        onTopScroll();
      });
      document.querySelectorAll('.pagination__number').forEach(button => {
        const pageIndex = Number(button.getAttribute('page-index'));
        if (pageIndex) {
          button.addEventListener('click', async () => {
            pagination.setCurrentPage(pageIndex);
            currentPage = pageIndex;

            paginatedList = queuedMoviesList.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            );
            main.innerHTML = '';

            renderMovies(paginatedList);
            onTopScroll();
          });
        }
      });

      queueBtn.textContent = `QUEUE : ${queuedMoviesNumber}`;
    }
  } else {
    main.insertAdjacentHTML(
      'beforeend',
      `<p class="alert">There are no movies in your queue!</p>`
    );
    queueBtn.textContent = `QUEUE`;
    loader.style.display = 'none';
  }
  queueBtn.setAttribute('disabled', true);
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

const queueRefresh = event => {
  if (queueBtn.style.backgroundColor !== 'transparent') {
    queueBtn.removeAttribute('disabled');
    queueBtn.click();
  }
};
const watchedRefresh = event => {
  if (watchedBtn.style.backgroundColor !== 'transparent') {
    watchedBtn.removeAttribute('disabled');
    watchedBtn.click();
  }
};

addToQueue.addEventListener('click', queueRefresh);
addToWatched.addEventListener('click', watchedRefresh);

//<p class="movie-card__genre-year">${singleMovieGenres} | ${getMovieYear(
//movie.release_date
//)}</p>
