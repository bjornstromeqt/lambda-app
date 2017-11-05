import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import client from './client';
import store from './store';
import App from './App';
import '../node_modules/bulma/css/bulma.css'
import './index.css';

render(
    <ApolloProvider client={client} store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
document.getElementById('app'));

