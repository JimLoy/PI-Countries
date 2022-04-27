import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './redux/store.js';
import axios from 'axios';
import './styles/normalize.css';
import './styles/index.css';

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


