import './add-to-local-storage.js';
import { getMovies } from './getMovies';

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
