// src/redux/actions/greetingActions.js

import axios from 'axios';

export const fetchRandomGreeting = () => {
  return dispatch => {
    dispatch(fetchGreetingRequest());
    axios
      .get('/api/greetings/random_greeting')
      .then(response => {
        const randomGreeting = response.data;
        dispatch(fetchGreetingSuccess(randomGreeting));
      })
      .catch(error => {
        dispatch(fetchGreetingFailure(error.message));
      });
  };
};

export const fetchGreetingRequest = () => {
  return {
    type: 'FETCH_GREETING_REQUEST'
  };
};

export const fetchGreetingSuccess = greeting => {
  return {
    type: 'FETCH_GREETING_SUCCESS',
    payload: greeting
  };
};

export const fetchGreetingFailure = error => {
  return {
    type: 'FETCH_GREETING_FAILURE',
    payload: error
  };
};
