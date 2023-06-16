import * as api from '../api/genres.js';

export const getChannelsByGenreName = (genreName) => async (dispatch) => {
  try {
    const { data } = await api.getChannelsByGenreName(genreName);
    dispatch({ type: 'GET_CHANNELS_BY_GENRE_NAME', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}