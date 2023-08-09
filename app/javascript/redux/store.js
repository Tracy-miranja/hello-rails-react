// src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './reducers/greetingReducer'; 
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  greeting: greetingReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
