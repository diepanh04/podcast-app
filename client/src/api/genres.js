import axios from 'axios';

const url = 'http://localhost:4000/genres';

export const getChannelsByGenre = (genreId) => axios.get(`${url}/${genreId}`);