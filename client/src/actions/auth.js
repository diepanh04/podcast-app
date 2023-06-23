import * as api from '../api/auth.js';
import firebase from '../services/firebase';

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
    const token = await firebase.auth.currentUser.getIdToken(true);
    const res = await api.authenticateUser({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    dispatch({ type: 'AUTHENTICATE_USER', payload: res.data })
  } catch (error) {
    console.log(error);
  }
}