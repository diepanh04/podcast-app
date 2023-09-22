import axios from "axios";

const url = 'http://localhost:4000/channels';

export const addHeart = (channelId, userId) => axios.post(`${url}/hearts`, {channelId, userId});
export const removeHeart = (channelId, userId) => axios.delete(`${url}/hearts/${channelId}/${userId}`);
export const getEpisodesByChannel = (channelName) => axios.get(`${url}/${channelName}`);
export const loadChannelStatus = (channelId, userId) => axios.post(`${url}/status`, { channelId, userId });