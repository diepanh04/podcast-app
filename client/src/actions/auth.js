import * as api from '../api/auth.js';

export const register = (newUser) => async (dispatch) => {
  console.log(newUser);
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