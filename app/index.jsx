import './main.css';

import uuid from 'node-uuid';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer, {
	notes: [
		{ id: uuid.v4(), task: 'Learn Webpack' },
		{ id: uuid.v4(), task: 'Learn React' },
		{ id: uuid.v4(), task: 'Drink a beer' }
	]
}, compose(
	window.devToolsExtension ? window.devToolsExtension() : undefined
));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('.app')
);