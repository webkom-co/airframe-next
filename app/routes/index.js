import React from 'react';
import {
    Route,
    Switch
} from 'react-router';

/* TODO: Somehow importing Universal Component generates
         a lot of async chunks although it shouldn't when
         they aren't imported dynamically. Because of this
         webpack compilation is absurdly slow ~240s on each reload
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
*/

//----- Static Route Imports ------
import Home from './Home';
import Params from './Params';

import Widgets from './Widgets';

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
import Breadcrumbs from './Breadcrumbs';

import ReCharts from './ReCharts';

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
import SearchResults from './SearchResults';
import ImagesResults from './ImagesResults';
import VideosResults from './VideosResults';
import UsersResults from './UsersResults';
import GalleryGrid from './GalleryGrid';
import GalleryTable from './GalleryTable';
import Inbox from './Inbox';
import NewEmail from './NewEmail';
import EmailDetails from './EmailDetails';
import ProfileDetails from './ProfileDetails';
import ProfileEdit from './ProfileEdit';
import AccountEdit from './AccountEdit';
import BillingEdit from './BillingEdit';
import SettingsEdit from './SettingsEdit';
import SessionsEdit from './SessionsEdit';
import Chat from './Chat';

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

            <Route path='/params/:param' component={Params} />

            <Route path='/widgets' exact component={Widgets} />

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
            <Route path='/interface/breadcrumbs' component={Breadcrumbs} />

            { /* Graphs */ }
            <Route path='/forms' exact component={Forms} />
            <Route path='/formslayouts' exact component={FormsLayouts} />
            <Route path='/inputgroups' exact component={InputGroups} />

            { /* Forms */ }
            <Route path='/recharts' exact component={ReCharts} />
            
            <Route path='/tables' exact component={Tables} />
            
            { /* Apps */ }
            <Route path='/projects/:type' exact component={Projects} />
            <Route path='/tasks/:type' exact component={Tasks} />
            <Route path='/taskskanban' exact component={TasksKanban} />
            <Route path='/tasksdetails' exact component={TasksDetails} />
            <Route path='/files/:type' exact component={Files} />
            <Route path='/users/:type' exact component={Users} />
            <Route path='/searchresults' exact component={SearchResults} />
            <Route path='/imagesresults' exact component={ImagesResults} />
            <Route path='/videosresults' exact component={VideosResults} />
            <Route path='/usersresults' exact component={UsersResults} />
            <Route path='/gallerygrid' exact component={GalleryGrid} />
            <Route path='/gallerytable' exact component={GalleryTable} />
            <Route path='/clients' exact component={Clients} />
            <Route path='/inbox' exact component={Inbox} />
            <Route path='/newemail' exact component={NewEmail} />
            <Route path='/emaildetails' exact component={EmailDetails} /> 
            <Route path='/profiledetails' exact component={ProfileDetails} />
            <Route path='/profileedit' exact component={ProfileEdit} />
            <Route path='/accountedit' exact component={AccountEdit} />
            <Route path='/billingedit' exact component={BillingEdit} />
            <Route path='/settingsedit' exact component={SettingsEdit} />
            <Route path='/sessionsedit' exact component={SessionsEdit} />
            <Route path='/chat' exact component={Chat} />

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
        </Switch>
    );
};

export { getRoutes };
