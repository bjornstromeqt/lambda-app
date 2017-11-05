import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import client from './client';


const middlewares = [thunk, client.middleware()];
const enhancers = [];
const devToolsExtension = window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composedEnhancers
    );
};


const store = configureStore({});


export default store;