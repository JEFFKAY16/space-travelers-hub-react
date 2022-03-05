import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missions from './missions';

const reducer = combineReducers({
  rockets: rocketReducer,
  missions,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
