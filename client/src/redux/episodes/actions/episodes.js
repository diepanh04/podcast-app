import * as api from '../../api/episodes';

export const addHeart = (episodeId, userId) => async(dispatch) => {
  try {
    await api.addHeart(episodeId, userId);
  } catch (error) {
    console.log(error);
  }
};

export const removeHeart = (episodeId, userId) => async(dispatch) => {
  try {
    await api.removeHeart(episodeId, userId);
  } catch (error) {
    console.log(error);
  }
};