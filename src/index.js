import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset-css';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          background-color: #f2f4f7;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);