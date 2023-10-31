import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { worker } from './mocks/worker';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
