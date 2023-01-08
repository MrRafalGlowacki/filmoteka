import axios from 'axios';
import { Notify } from 'notiflix';

let movieId = '';
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const loader = document.querySelector('.loader');
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const main = document.querySelector('.main');



 const getMoviesbyId = async (movieId) => {
     loader.style.display = 'block';
     try {
    let API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
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

async function getWatchedMovies() {
    currentPage = 1;
    queueBtn.removeAttribute('disabled');
    main.innerHTML = '';

   

    if (localStorage.getItem('added-to-watched') === null) {
        Notify.info('There are no movies in your watched list!');
        
    } else {
        watchedMovies = JSON.parse(localStorage.getItem('added-to-watched'));
        console.log(watchedMovies);
        let watchedMoviesList = [];
    

        for (let i = 0; i < watchedMovies.length; i++) {
            let watchedMovieId = watchedMovies[i];
            
    
            let watchedMoviesItem = await getMoviesbyId(watchedMovieId);

            watchedMoviesList.push(watchedMoviesItem);
            
            
    
        }
        renderMovies(watchedMoviesList);
        
    }
    watchedBtn.setAttribute('disabled', true);
    

}



watchedBtn.addEventListener('click', event => {
    event.preventDefault();
    getWatchedMovies();
});


//queue

let queuedMovies = [];
console.log(queuedMovies.length);
async function getQueuedMovies() {
    watchedBtn.removeAttribute('disabled');
    currentPage = 1;
    main.innerHTML = '';
      if (localStorage.getItem('added-to-queue')===null) {
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
}

queueBtn.addEventListener('click', event => {
    event.preventDefault();
    getQueuedMovies()
});

//render movies
function renderMovies(movies) {
  const markup = movies
    .map(movie => {
      return `
<div class="movie-card">
  <img class="movie-card__image" alt="" src='https://image.tmdb.org/t/p/w500/${
    movie.poster_path
  }'}>
  <div class="movie-card__label">
    <p class="movie-card__title">${movie.original_title}</p>
    
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