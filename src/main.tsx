import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default.ts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
