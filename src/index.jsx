import React from 'react';
import ReactDom from 'react-dom';
import './scss/styles.scss';
import App from './App';


ReactDom.render(
  <App />,
  document.getElementById('root'),
);

module.hot.accept();
