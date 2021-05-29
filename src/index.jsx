import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import './style.css';
import { BrowserRouter } from 'react-router-dom';

export const API_BASE_URL = 'http://leviexpress-backend.herokuapp.com/api';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
