import axios from 'axios';

const url = 'http://localhost:4000/channels';

export const getChannels = (genreId) => axios.get(url, genreId);