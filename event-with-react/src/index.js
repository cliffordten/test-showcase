import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
      <Fragment>
              <App />
      </Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
