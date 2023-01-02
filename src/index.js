// import './add-to-local-storage.js';
import { renderMovieCard } from './js/getAndRenderTopRatedMovies';
import { getMovies } from './getMovies';
window.onload = function () {
  renderMovieCard();
};

const inputSearch = document.querySelector("input[name='searchQuery']");
const searchButton = document.querySelector('.search-form__btn');

let currentPage = 1;

searchButton.addEventListener('click', inputListener);

async function inputListener(event) {
  event.preventDefault();
  currentPage = 1;
  const searchQuery = inputSearch.value;
  const moviesList = await getMovies(searchQuery, currentPage);
  console.log(moviesList);
}
