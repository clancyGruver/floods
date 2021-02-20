import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import auth from './auth';

const reducers = combineReducers({
  auth,
});

const store = createStore(reducers, false, applyMiddleware(thunkMiddleware));

export default store;
