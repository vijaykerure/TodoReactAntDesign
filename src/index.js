import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider store={ createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
  ) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
