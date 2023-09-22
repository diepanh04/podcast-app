import * as api from '../../api/genres.js';

export const getChannelsByGenreName = (genreName) => async (dispatch) => {
  try {
    const { data } = await api.getChannelsByGenreName(genreName);
    dispatch({ type: 'GET_CHANNELS_BY_GENRE_NAME', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllGenres = () => async (dispatch) => {
  try {
    const { data } = await api.getAllGenres();
    dispatch({ type: 'GET_ALL_GENRES', payload: data })
  } catch (error) {
    console.log(error.message);
  }
};