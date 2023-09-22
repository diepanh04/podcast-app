import * as api from '../../api/auth.js';
import firebase from '../../../services/firebase.js';

export const register = (newUser) => async (dispatch) => {
  if (newUser.password != newUser.confirmPassword) {
    const message = 'Passwords do not match';
    return dispatch({ type: 'REGISTER_ERRORS', payload: message });
  }
  try {
    const { data } = await api.register({
      email: newUser.email,
      password: newUser.password,
      name: newUser.name,
    })
    dispatch({ type: 'REGISTER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const authenticateUser = () => async (dispatch) => {
  try {
    const user = firebase.auth.currentUser;
    
    if (!user) {
      throw new Error('User is not authenticated');
    }
    
    const token = await user.getIdToken(true);
    const res = await api.authenticateUser({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    
    dispatch({ type: 'AUTHENTICATE_USER', payload: res.data });
  } catch (error) {
    console.log(error);
  }
};


export const getFavouriteChannels = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getFavouriteChannels(userId);
    dispatch({ type: 'GET_FAVOURITE_CHANNELS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const addToFavouriteChannels = (channel) => async (dispatch) => {
//   dispatch({ type: 'ADD_TO_FAVOURITE_CHANNELS', payload: channel });
// };

// export const removeFromFavouriteChannels = (channel) => async (dispatch) => {
//   dispatch({ type: 'REMOVE_FROM_FAVOURITE_CHANNELS', payload: channel });
// };

export const getFavouriteEpisodes= (userId) => async (dispatch) => {
  try {
    const { data } = await api.getFavouriteEpisodes(userId);
    dispatch({ type: 'GET_FAVOURITE_EPISODES', payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const addToFavouriteEpisodes = (episode) => async(dispatch) => {
//   dispatch({ type: 'ADD_TO_FAVOURITE_EPISODES', payload: episode });
// };

// export const removeFromFavouriteEpisodes = (episode) => async(dispatch) => {
//   dispatch({ type: 'REMOVE_FROM_FAVOURITE_EPISODES', payload: episode });
// };

