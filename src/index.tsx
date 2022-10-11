import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <Routes />
    <GlobalStyle/>
  </React.Fragment>
);
