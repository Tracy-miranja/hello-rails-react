// app/javascript/packs/application.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app.js';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  <App />, 
  document.getElementById('root'));
});
