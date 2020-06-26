import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './screens/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
    <HomePage />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
