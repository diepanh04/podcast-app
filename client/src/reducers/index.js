import { combineReducers } from 'redux';

import genres from './genres.js';
import auth from './auth.js';

export const reducers = combineReducers({ genres, auth });