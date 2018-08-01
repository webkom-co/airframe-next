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
    onLoad: (loadedModule, loadOptions, props) => {
        const { store } = props;
        const reducers = loadedModule.exports ? 
            loadedModule.exports.reducers : loadedModule.reducers;

        if(reducers) {
            if(!store) {
                throw 'Universal Component: When you want to ' +  
                    'asynchronously inject reducers, you need to provide ' +  
                    'also Redux \'store\' in the Bundle props.';
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
import Cards from './Cards';
import BadgesLabels from './BadgesLabels';
import Images from './Images';
import ProgressBars from './ProgressBars';
import MediaObjects from './MediaObjects';
import ListGroups from './ListGroups';
import Buttons from './Buttons';
import Typography from './Typography';
import Paginations from './Paginations';
import Alerts from './Alerts';
import Accordions from './Accordions';
import TabsPills from './TabsPills';
import TooltipsPopovers from './TooltipsPopovers';

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
            <Route 
                path='/cards'
                exact
                component={Cards} 
            />
            <Route 
                path='/badgeslabels'
                exact
                component={BadgesLabels} 
            />
            <Route 
                path='/progressbars'
                exact
                component={ProgressBars} 
            />
            <Route 
                path='/mediaobjects'
                exact
                component={MediaObjects} 
            />
            <Route 
                path='/listgroups'
                exact
                component={ListGroups} 
            />
            <Route 
                path='/buttons'
                exact
                component={Buttons} 
            />
            <Route 
                path='/typography'
                exact
                component={Typography} 
            />
            <Route 
                path='/interface/images'
                exact
                component={Images} 
            />
            <Route
                path='/paginations'
                exact
                component={Paginations} 
            />
            <Route
                path='/alerts'
                exact
                component={Alerts} 
            />
            <Route
                path='/accordions'
                exact
                component={Accordions} 
            />
            <Route
                path='/tabspills'
                exact
                component={TabsPills} 
            />
            <Route
                path='/tooltipspopovers'
                exact
                component={TooltipsPopovers} 
            />
        </Switch>
    );
};

export { getRoutes };
