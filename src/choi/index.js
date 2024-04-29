import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 여기가 메인 메이지
import App from './App';
// 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
