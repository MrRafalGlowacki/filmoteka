import axios from 'axios';
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const API_URL = 'https://api.themoviedb.org/3/search/movie';
const loader = document.querySelector('.loader');

export async function getMovies(query, pageNumber = 1) {
  loader.style.display = 'block';
  try {
    const response = await axios.get(API_URL, {
      params: {
        api_key: `${API_KEY}`,
        query: `${query}`,
        page: pageNumber,
      },
    });
    loader.style.display = 'none';
    return response.data;
  } catch (error) {
    loader.style.display = 'none';
    console.error(error);
  }
}
