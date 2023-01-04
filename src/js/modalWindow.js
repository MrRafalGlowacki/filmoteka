import axios from 'axios';
const modalOpen = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalImage = document.querySelector('.modal__image');
const modalTitle = document.querySelector('.modal__title');
const modalAbout = document.querySelector('.modal__about-text');
const modalGene = document.querySelector('.genres');
const modalInfoTitle = document.querySelector('.orginal-title');
const modalPopularity = document.querySelector('.popularity');
const modalRate = document.querySelector('.rate');
const modalTotalRate = document.querySelector('.rate__total');
console.log(modalInfoTitle);

let movieId = '';
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const modalInformation = async (
  link = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
) => {
  const response = await axios.get(link);

  const movieGenres = response.data.genres.map(function (item) {
    return item['name'];
  });

  modalGene.textContent = movieGenres.join(', ');
  modalRate.textContent = Math.round(response.data.vote_average * 100) / 100;
  modalTotalRate.textContent = response.data.vote_count;
  modalTitle.textContent = response.data.title;
  modalPopularity.textContent = response.data.popularity;
  modalInfoTitle.textContent = response.data.original_title;
  modalAbout.textContent = response.data.overview;
};

const modalWindowOpen = event => {
  if (event.target.className === 'movie-card__image') {
    movieId = event.target.parentNode.children[1].children[2].textContent;
    modalInformation();
    modalImage.src = event.target.src;
    modalOpen.style.display = 'flex';
  }
};
const closeModalWindow = event => {
  modalOpen.style.display = 'none';
};

addEventListener('click', modalWindowOpen);
modalClose.addEventListener('click', closeModalWindow);
