import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route } from 'react-router';
import routes from './Routes';
import thunk from 'redux-thunk';
import MarketPage from './components/MarketPage';
import CartPage from './components/CartPage';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Header from './Header';

function products(state = [], action) {
	return [
		...state,
		action.display
	];
	return state;
}
const store = createStore(products, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
  	<Header />,
    <App />,
  </Provider>,
  document.getElementById('root')
);