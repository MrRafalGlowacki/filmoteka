import { getMovies } from '../getMovies';
import { render } from './renderMovieCard';

const main = document.querySelector('.main-box');
const inputSearch = document.querySelector("input[name='searchQuery']");
const searchButton = document.querySelector('.header__search-form-btn');

let currentPage = 1;

searchButton.addEventListener('click', renderFoundMovies);

async function renderFoundMovies(event) {
  event.preventDefault();
  currentPage = 1;
  const searchQuery = inputSearch.value;
  if (!searchQuery) {
    alert('Enter movie title');
  } else {
    const moviesList = await getMovies(searchQuery, currentPage);
    if (!moviesList.results.length) {
      main.innerHTML = `<div class="no-movies">
      No movie found
      </div > `;
      main.insertAdjacentHTML('beforeend', render(elem));
    } else {
      main.innerHTML = '';
      console.log(moviesList);
      moviesList.results.map(elem => {
        main.insertAdjacentHTML('beforeend', render(elem));
      });
    }
  }
}

export { renderFoundMovies };
