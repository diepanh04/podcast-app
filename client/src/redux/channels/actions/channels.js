import * as api from '../../api/channels';

export const addHeart = (channelId, channelName, userId) => async(dispatch) => {
  try {
    await api.addHeart(channelId, userId);
    dispatch({ type: 'ADD_HEART', payload: channelName });
  } catch (error) {
    console.log(error);
  }
};

export const removeHeart = (channelId, channelName, userId) => async(dispatch) => {
  try {
    await api.removeHeart(channelId, userId);
    dispatch({ type: 'REMOVE_HEART', payload: channelName });
  } catch (error) {
    console.log(error);
  }
};

export const getEpisodesByChannel = (channelName) => async(dispatch) => {
  try {
    const { data } = await api.getEpisodesByChannel(channelName);
    dispatch({ type: 'GET_EPISODES_BY_CHANNEL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const loadChannel = (channel, userId) => async(dispatch) => {
  try {
    const { data } = await api.loadChannelStatus(channel.id, userId);
    const loadedChannel = {
      ...data,
      ...channel,
    }
    dispatch({ type: 'LOAD_CHANNEL', payload: loadedChannel });
  } catch (error) {
    console.log(error.message);
  }
}
