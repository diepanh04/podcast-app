import axios from "axios";

const url = 'http://localhost:4000/episodes';

export const addHeart = (episodeId, userId) => axios.post(`${url}/hearts`, { episodeId, userId });
export const removeHeart = (episodeId, userId) => axios.delete(`${url}/hearts?episodeId=${episodeId}&userId=${userId}`);