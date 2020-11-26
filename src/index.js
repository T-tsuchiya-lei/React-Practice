import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainContainer from './containers/MainContainer'
import reducer from './reducers/reducer'

const store = createStore(reducer, {});

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);

