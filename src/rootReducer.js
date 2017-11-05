import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import client from './client';

const appReducer = combineReducers({
    apollo: client.reducer(),
    routing: routerReducer
});


const rootReducer = (state, action) => {
    if (action.type === "LOGOUT_USER_REQUEST") {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
