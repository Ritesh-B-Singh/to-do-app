import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'react-toastify/dist/ReactToastify.css';
import usersReducer from './redux/reducers/usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(usersReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
