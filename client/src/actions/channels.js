import * as api from '../api';

export const createChannel = (channel) => async (dispatch) => {
  try {
    const { data } = await api.createChannel(channel);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}