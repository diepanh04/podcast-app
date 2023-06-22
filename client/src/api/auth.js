import axios from 'axios';

const url = 'http://localhost:4000/users';

export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const authenticateUser = (headers) => axios.get(`${url}`, headers);