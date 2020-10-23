import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const requireReducers = require.context('./reducers', false, /\.reducer\.js$/);
const reducers = {};
requireReducers.keys().forEach((filename) => {
	const moduleName = filename.replace(/(\.\/|\.reducer\.js)/g, '');
	reducers[moduleName] = requireReducers(filename).default;
});
const rootReducer = combineReducers(reducers);

const middleware = [thunk];

export const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));
