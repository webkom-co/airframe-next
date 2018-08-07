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
import Cards from './Cards';

import Colors from './Colors';
import Typography from './Typography';
import Buttons from './Buttons';
import Paginations from './Paginations';
import Images from './Images';
import Avatars from './Avatars';
import ProgressBars from './ProgressBars';
import BadgesLabels from './BadgesLabels';
import MediaObjects from './MediaObjects';
import ListGroups from './ListGroups';
import Alerts from './Alerts';
import Accordions from './Accordions';
import TabsPills from './TabsPills';
import TooltipsPopovers from './TooltipsPopovers';
import Dropdowns from './Dropdowns';
import Modals from './Modals';

import Forms from './Forms';
import FormsLayouts from './FormsLayouts';
import InputGroups from './InputGroups';

import Tables from './Tables';

import Projects from './Projects';
import Tasks from './Tasks';
import TasksKanban from './TasksKanban';
import TasksDetails from './TasksDetails';
import Files from './Files';
import Users from './Users';
import Clients from './Clients';

import Icons from './Icons';

import Register from './Register';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import LockScreen from './LockScreen';
import Error404 from './Error404';
import Confirmation from './Confirmation';
import Success from './Success';
import Danger from './Danger';
import ComingSoon from './ComingSoon';

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
            <Route path='/cards' exact component={Cards} />

            { /* Interface */ }
            <Route path='/colors' exact component={Colors} />
            <Route path='/typography' exact component={Typography} />
            <Route path='/buttons' exact component={Buttons} />
            <Route path='/paginations' exact component={Paginations} />
            <Route path='/interface/images' exact component={Images} />
            <Route path='/avatars' exact component={Avatars} />
            <Route path='/progressbars' exact component={ProgressBars} />
            <Route path='/badgeslabels' exact component={BadgesLabels} />
            <Route path='/mediaobjects' exact component={MediaObjects} />
            <Route path='/listgroups' exact component={ListGroups} />
            <Route path='/alerts' exact component={Alerts} />
            <Route path='/accordions' exact component={Accordions} />
            <Route path='/tabspills' exact component={TabsPills} />
            <Route path='/tooltipspopovers' exact component={TooltipsPopovers} />
            <Route path='/dropdowns' exact component={Dropdowns} />
            <Route path='/interface/modals' component={Modals} />

            { /* Forms */ }
            <Route path='/forms' exact component={Forms} />
            <Route path='/formslayouts' exact component={FormsLayouts} />
            <Route path='/inputgroups' exact component={InputGroups} />
            
            <Route path='/tables' exact component={Tables} />
            
            { /* Apps */ }
            <Route path='/projects/:type' exact component={Projects} />
            <Route path='/tasks/:type' exact component={Tasks} />
            <Route path='/taskskanban' exact component={TasksKanban} />
            <Route path='/tasksdetails' exact component={TasksDetails} />
            <Route path='/files/:type' exact component={Files} />
            <Route path='/users/:type' exact component={Users} />
            <Route path='/clients' exact component={Clients} />

            <Route path='/icons' exact component={Icons} />

            { /* Pages */ }
            <Route path='/pages/register' component={ Register } />
            <Route path='/pages/login' component={ Login } />
            <Route path='/pages/forgotpassword' component={ ForgotPassword } />
            <Route path='/pages/lockscreen' component={ LockScreen } />
            <Route path='/pages/error404' component={ Error404 } />
            <Route path='/pages/confirmation' component={ Confirmation } />
            <Route path='/pages/success' component={ Success } />
            <Route path='/pages/danger' component={ Danger } />
            <Route path='/pages/comingsoon' component={ ComingSoon } />

            <Route 
                path='/redux-example' 
                component={() => <UniversalComponent route='ReduxExample' store={store} />} 
            />
        </Switch>
    );
};

export { getRoutes };
