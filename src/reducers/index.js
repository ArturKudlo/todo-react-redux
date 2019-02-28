import { combineReducers } from 'redux'

import filter from './filterReducer';
import todo from './todoReducer';

export default combineReducers({ filter, todo })