import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';

function logger(state = 'empty', action) {
  console.log(state);
  console.log(action);
  return state;
}

const rootReducer = combineReducers({
  logger
});

export default rootReducer;
