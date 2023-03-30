import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';
const MOVIE_PATH = '/discover/movie?';
const SEARCH_PATH = '/search/movie?';

export const server = {
    getMovies: async (state) => {
        const { data: {results} } = await axios.get(`${API_URL}${MOVIE_PATH}`, {
            params: {
                api_key: apiKey
            }
        })
        state(results)
    },

    findMovie: async (title, state) => {
        await axios.get(`${API_URL}${SEARCH_PATH}`, {
            params: {
                api_key: apiKey,
                query: title
            }
        })
        .then(res => {
            state(res.data.results)
            if(res.data.results.length === 0) {
                state([{id: 1, title: 'not found'}])
            }
        })
    }
}