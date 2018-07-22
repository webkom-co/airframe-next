import React from 'react';
import {
    Route,
    Switch
} from 'react-router';
import universal from 'react-universal-component';

import { PageLoader } from './../components';
import { buildReducers } from './../modules';

// UniversalComponent with added support for asynch loading of
// Redux reducers. UniversalComponent porvides code-splitting
// with propper SSR support (https://github.com/faceyspacey/react-universal-component)
const UniversalComponent = universal(props => import(`./${props.route}`), {
    loading: PageLoader,
    onLoad: (loadedModule, { isSync, isServer }, props) => {
        const { store } = props;
        const reducers = loadedModule.exports ? 
            loadedModule.exports.reducers : loadedModule.reducers;

        if(reducers) {
            if(!store) {
                throw 'Universal Component: When you want to ' +  
                    'asynchronously inject reducers, you need to provide ' +  
                    'also Redux \'store\' in the Bundle props.';

                return;
            }
            const updatedReducers = buildReducers(reducers);

            store.replaceReducer(updatedReducers);
        }
    }
});

//----- Static Route Imports ------
import Home from './Home';
import Params from './Params';
import Avatars from './Avatars';

//------ Route Definitions --------
const getRoutes = (store) => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route 
                path='/splitted' 
                exact 
                component={() => <UniversalComponent route='Splitted' />} 
            />
            <Route path='/params/:param' component={Params} />
            <Route 
                path='/redux-example' 
                component={() => <UniversalComponent route='ReduxExample' store={store} />} 
            />
            <Route 
                path='/avatars'
                exact
                component={Avatars} 
            />
        </Switch>
    );
};

export { getRoutes };
