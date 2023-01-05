import axios from 'axios';
const loader = document.querySelector('.loader');
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const getMovies = async (pageNumber = 1) => {
  loader.style.display = 'block';
  try {
    const response = await axios.get(API_URL, {
      params: {
        api_key: `${API_KEY}`,
        page: pageNumber,
        language: 'en-US',
      },
    });
    loader.style.display = 'none';
    return response;
  } catch (error) {
    loader.style.display = 'none';
    console.log(error);
  }
};
export { getMovies };
// ?fields=webformatURL,largeImageURL,tags,likes,views,comments,downloads
