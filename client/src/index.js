import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import Router from './routes';
import { Provider } from 'react-redux';
import ReduxStore from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <Router />
    </Provider>
  </React.StrictMode>
);


