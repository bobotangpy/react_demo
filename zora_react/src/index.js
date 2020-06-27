import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(

  <Provider store={store}>
    <LandingPage />
  </Provider>

  ,document.getElementById('root')
);