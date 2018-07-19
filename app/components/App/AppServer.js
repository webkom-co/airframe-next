import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { getRoutes } from './../../routes';
import AppLayout from './../../layout/default';

import FakeStaticContext from './FakeStaticContext';

const AppServer = props => {
    const { 
        history, 
        store
    } = props;

    return (
        <Provider store={store}>
            <FakeStaticContext>
                <ConnectedRouter history={history}>
                    <AppLayout>
                        { getRoutes(store) }
                    </AppLayout>
                </ConnectedRouter>
            </FakeStaticContext>
        </Provider>
    );
}

AppServer.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default hot(module)(AppServer);