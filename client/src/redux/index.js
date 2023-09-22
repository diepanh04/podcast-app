import { combineReducers } from 'redux';

import genres from './genres/reducer/genres';
import auth from './auth/reducer/auth';
import channels from './channels/reducer/channels';

export const reducers = combineReducers({ genres , auth, channels });