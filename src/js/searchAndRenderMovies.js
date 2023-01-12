import { getMovies } from './getMovies';
import { render } from './renderMovieCard';
import { Notify } from 'notiflix';
import * as pagination from './pagination';
import { onTopScroll } from './toTopBtn';

const header = document.querySelector('.header__no-movies');
const main = document.querySelector('.main-box');
const inputSearch = document.querySelector("input[name='searchQuery']");
const searchButton = document.querySelector('.header__search-form-btn');
// const toTopBtn = document.querySelector('.to-top');

let currentPage = 1;

searchButton.addEventListener('click', renderFoundMovies);

async function renderFoundMovies(event) {
  event.preventDefault();
  header.innerHTML = '';
  currentPage = 1;
  const searchQuery = inputSearch.value;
  if (!searchQuery) {
    Notify.info('Enter movie title');
  } else {
    let moviesList = await getMovies(searchQuery, currentPage);
    if (!moviesList.results.length) {
      header.innerHTML = `Search result not successful. Enter the correct movie name.`;
    } else {
      main.innerHTML = '';

      moviesList.results.map(elem => {
        main.insertAdjacentHTML('beforeend', render(elem));
      });
      moviesList.total_pages < 500
        ? pagination.getPaginationNumbers(moviesList.total_pages)
        : pagination.getPaginationNumbers(500);
      pagination.setCurrentPage(currentPage);

      pagination.prevButton.addEventListener('click', async () => {
        pagination.setCurrentPage(currentPage - 1);
        moviesList = await getMovies(searchQuery, --currentPage);
        main.innerHTML = '';
        console.log(moviesList);

        moviesList.results.map(elem => {
          main.insertAdjacentHTML('beforeend', render(elem));
        });
        onTopScroll();
      });
      pagination.nextButton.addEventListener('click', async () => {
        pagination.setCurrentPage(currentPage + 1);
        moviesList = await getMovies(searchQuery, ++currentPage);
        main.innerHTML = '';
        console.log(moviesList);

        moviesList.results.map(elem => {
          main.insertAdjacentHTML('beforeend', render(elem));
        });
        onTopScroll();
      });
      document.querySelectorAll('.pagination__number').forEach(button => {
        const pageIndex = Number(button.getAttribute('page-index'));
        if (pageIndex) {
          button.addEventListener('click', async () => {
            pagination.setCurrentPage(pageIndex);
            currentPage = pageIndex;

            moviesList = await getMovies(searchQuery, currentPage);
            main.innerHTML = '';
            console.log(moviesList);

            moviesList.results.map(elem => {
              main.insertAdjacentHTML('beforeend', render(elem));
            });
            onTopScroll();
          });
        }
      });
    }
  }
}

export { renderFoundMovies };

// toTopBtn.addEventListener('click', onTopScroll);

// window.addEventListener('scroll', onScrollToTopBtn);

// function onScrollToTopBtn() {
//   const offsetTrigger = 100;
//   const pageOffset = window.pageYOffset;

//   pageOffset > offsetTrigger
//     ? toTopBtn.classList.remove('is-hidden')
//     : toTopBtn.classList.add('is-hidden');
// }

// function onTopScroll() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }
// export { onTopScroll };
