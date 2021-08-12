import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import GlobalRoutes from './routes/global.routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
