import axios from 'axios';

const url = 'http://localhost:4000/genres';

export const getChannelsByGenreName = (genreName) => axios.get(`${url}/${genreName}`);