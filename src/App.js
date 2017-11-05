import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Page from './components/Page/index';
import Company from './containers/Company';
import Terminal from './containers/Terminal';

class App extends Component {
    render() {
        return (
            <Page>

                <Route path="/" component={() => (<Company/>)}/>
                <Terminal/>
            </Page>
        );
    }
}

export default App;
