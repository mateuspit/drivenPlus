import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCSS from './Reset';
import GlobalBodyStyle from "./GlobalBodyStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalBodyStyle />
    <App />
  </React.StrictMode>
);

