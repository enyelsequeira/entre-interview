/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from './contexts/globalContext';
import TimeProvider from './contexts/timePickerContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <TimeProvider>
        <App />
      </TimeProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
