import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from './contexts/usercontext';
import { ThemeProvider } from './contexts/themecontext';
import { DataProvider } from './contexts/datacontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
