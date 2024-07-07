import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'; 
import appConfig from './app.json';

const { name } = appConfig.expo; 

// Render the app in the web environment using ReactDOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);
