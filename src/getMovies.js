import axios from 'axios';
const API_KEY = 'b942b8bf626a04f48b07153a95ee51a0';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

export async function getMovies(query, pageNumber = 1) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        api_key: `${API_KEY}`,
        query: `${query}`,
        page: pageNumber,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
