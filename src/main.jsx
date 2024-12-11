import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, ReactDOM } from 'react-dom/client';
import './CSS-files/index.css';
import App from './App.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div id="wrapper">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
