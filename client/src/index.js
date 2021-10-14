import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './JS/store/store'
<<<<<<< HEAD

import 'antd/dist/antd.css'
=======


>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store= {store}>
        <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


