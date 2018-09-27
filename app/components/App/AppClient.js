import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './../../layout/default';
import { getRoutes } from './../../routes';

const AppClient = () => {
    return (
        <Router>
            <AppLayout>
                { getRoutes() }
            </AppLayout>
        </Router>
    );
}

export default hot(module)(AppClient);