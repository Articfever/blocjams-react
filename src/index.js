import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
<<<<<<< HEAD
  </BrowserRouter>, document.getElementById('root'));
=======
  </BrowserRouter>
  , document.getElementById('root'));
>>>>>>> routing
registerServiceWorker();
