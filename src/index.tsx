import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { StoreContext } from './hooks/use-store';
import { stores } from './store/stores';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StoreContext.Provider value={stores}>
    <App />
  </StoreContext.Provider>
);
