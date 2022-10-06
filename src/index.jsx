import { StrictMode } from 'react';

import ReactDom from 'react-dom/client';

import App from './App';

ReactDom.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
