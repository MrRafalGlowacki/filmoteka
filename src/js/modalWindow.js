import axios from 'axios';
import { queueStorageAdd } from './addToLocalStorage';
const modalOpen = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.modal__backdrop');
const modalClose = document.querySelector('.modal__close');
const modalImage = document.querySelector('.modal__image');
const modalTitle = document.querySelector('.modal__title');
const modalAbout = document.querySelector('.modal__about-text');
const modalGene = document.querySelector('.genres');
const modalInfoTitle = document.querySelector('.orginal-title');
const modalPopularity = document.querySelector('.popularity');
const modalRate = document.querySelector('.rate');
const modalTotalRate = document.querySelector('.rate__total');
const modalId = document.querySelector('.modal__id');
const addToQueue = document.querySelector('.queue-btn');
const addToWatched = document.querySelector('.watched-btn');

let isModalOpen = false;
let movieId = '';
let queueMovies = [];
let watchedMovies = [];
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';

const modalInformation = async (
  link = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
) => {
  const response = await axios.get(link);
  const movieGenres = response.data.genres.map(function (item) {
    return item['name'];
  });
  modalGene.textContent = movieGenres.join(', ');
  modalRate.textContent = (
    Math.round(response.data.vote_average * 10) / 10
  ).toFixed(1);
  modalTotalRate.textContent = response.data.vote_count;
  modalTitle.textContent = response.data.title;
  modalPopularity.textContent = (
    Math.round(response.data.popularity * 10) / 10
  ).toFixed(1);
  modalInfoTitle.textContent = response.data.original_title;
  modalAbout.textContent = response.data.overview;
  modalId.textContent = response.data.id;
};

const modalWindowOpen = async event => {
  if (event.target.className === 'movie-card__image') {
    movieId = event.target.parentNode.children[1].children[2].textContent;
    await modalInformation();
    modalImage.src = event.target.src;
    modalOpen.style.display = 'flex';
    modalBackdrop.style.display = 'flex';
    isModalOpen = true;
  }
};

const closeModalWindow = event => {
  modalOpen.style.display = 'none';
  modalBackdrop.style.display = 'none';
  isModalOpen = false;
};

const clickEscape = event => {
  if (isModalOpen) {
    if (event.keyCode === 27) {
      closeModalWindow();
    }
  }
};

const closeByClick = event => {
  if (isModalOpen && event.target.className !== 'movie-card__image') {
    if (!event.target.closest('.modal')) {
      closeModalWindow();
    }
  }
};

addEventListener('click', modalWindowOpen);
modalClose.addEventListener('click', closeModalWindow);
addEventListener('keydown', clickEscape);
addEventListener('click', closeByClick);
