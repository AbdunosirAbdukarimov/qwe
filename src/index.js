import React from 'react';
import ReactDOM from 'react-dom/client';
// import Shopping from './components/Shopping/Shopping';
import App from './components/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Shopping /> */}
  </React.StrictMode>
);

