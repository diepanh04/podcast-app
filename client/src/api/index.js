import axios from 'axios';

const url = 'http://localhost:4000/channels';

export const createChannel = (newChannel) => axios.post(url, newChannel);