import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader'

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Layout from './../../layout/default';
import { getRoutes } from './../../routes';

const AppClient = props => {
    const { history, store } = props;
    
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Layout>
                    { getRoutes(store) }
                </Layout>
            </ConnectedRouter>
        </Provider>
    );
}

AppClient.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default hot(module)(AppClient);