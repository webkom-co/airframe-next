import React from 'react';
import PropTypes from 'prop-types';
import { 
    createStore,
    applyMiddleware 
} from 'redux';
import { Provider } from 'react-redux';
import { 
    ConnectedRouter,
    routerMiddleware as createRouterMiddleware, 
    push 
} from 'react-router-redux';
import thunk from 'redux-thunk';

import getRoutes from './routes'
import { buildReducers } from './modules';

import Layout from './layout/default';

// ------ Fake Static Context ------
// hack to get <Redirect /> to work on server side without StaticRouter
// @see https://github.com/ReactTraining/react-router/issues/4892
class FakeStaticContext extends React.Component {
    static childContextTypes = {
        router: PropTypes.object.isRequired,
    }
  
    getChildContext() {
        return {
            router: {
                staticContext: {},
            },
        }
    }
  
    render() {
        return this.props.children
    }
}

// --------- Store Creation --------
const getStore = history => {
    const routerMiddleware = createRouterMiddleware(history);
    
    const store = createStore(
        buildReducers(),
        applyMiddleware(routerMiddleware, thunk)
    );

    return store;
}
// ---------- App Factory -----------
const App = {
    createClient(history) {
        const store = getStore(history);

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Layout>
                        { getRoutes(store) }
                    </Layout>
                </ConnectedRouter>
            </Provider>
        );
    },
    createServer(history, initialUrl) {
        const store = getStore(history);

        return (
            <Provider store={store}>
                <FakeStaticContext>
                    <ConnectedRouter history={history}>
                        <Layout>
                            { getRoutes(store) }
                        </Layout>
                    </ConnectedRouter>
                </FakeStaticContext>
            </Provider>
        );
    }
}

export default App;
