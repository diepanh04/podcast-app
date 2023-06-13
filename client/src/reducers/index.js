import { combineReducers } from 'redux';

import users from './users';
import channels from './channels';

export const reducers = combineReducers({ channels });