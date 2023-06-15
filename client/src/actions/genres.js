import * as api from '../api/genres.js';

export const getChannelsByGenre = (genreId) => async (dispatch) => {
  try {
    const { data } = await api.getChannelsByGenre(genreId);
    dispatch({ type: 'GET_CHANNELS_BY_GENRE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}
