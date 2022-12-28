/*
FETCH AND RENDER TOP RATED MOVIES
*/
import axios from 'axios';
const main = document.querySelector('.main2'); // main2(tutaj dodtakowo w main.html i main.scss)  jest testowo w celu sprawdzenia pozycjonowania elementow

const renderMovieCard = data => {
  // do poprawy wyswietlanie daty zeby byl tylko rok
  const element = data
    .map(elem => {
      return `
    <div class="movie-card">
      <img class="movie-card__image" alt="" src='https://image.tmdb.org/t/p/w500/${elem.poster_path}'}>
      <div class="movie-card__label">
        <p class="movie-card__title">${elem.original_title}</p>
        <p class="movie-card__genre-year">Drama, Action | ${elem.release_date}</p> 
      </div>
    </div>
  `;
    })
    .join('');
  main.insertAdjacentHTML('beforeend', element);
};

const fetchMovies = async () => {
  try {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/top_rated?api_key=b942b8bf626a04f48b07153a95ee51a0&language=en-US&page=1
       `
    );
    renderMovieCard(response.data.results);
  } catch (error) {
    console.log(error);
  }
};
//fetchMovies(); // funkcja do wywołania gdy chcemy główne filmy
export { fetchMovies };
