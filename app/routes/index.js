import React from 'react';
import {
    Route,
    Switch
} from 'react-router';

import Home from './Home';

import CustomNavbarExample from './CustomNavbarExample';

import Widgets from './Widgets';

import Cards from './Cards';

import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Colors from './Interface/Colors';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';

import ReCharts from './Graphs/ReCharts';

import Forms from './Forms/Forms';
import FormsLayouts from './Forms/FormsLayouts';
import InputGroups from './Forms/InputGroups';

import Tables from './Tables/Tables';

import AccountEdit from './Apps/AccountEdit';
import BillingEdit from './Apps/BillingEdit';
import Chat from './Apps/Chat';
import Clients from './Apps/Clients';
import EmailDetails from './Apps/EmailDetails';
import Files from './Apps/Files';
import GalleryGrid from './Apps/GalleryGrid';
import GalleryTable from './Apps/GalleryTable';
import ImagesResults from './Apps/ImagesResults';
import Inbox from './Apps/Inbox';
import NewEmail from './Apps/NewEmail';
import ProfileDetails from './Apps/ProfileDetails';
import ProfileEdit from './Apps/ProfileEdit';
import Projects from './Apps/Projects';
import SearchResults from './Apps/SearchResults';
import SessionsEdit from './Apps/SessionsEdit';
import SettingsEdit from './Apps/SettingsEdit';
import Tasks from './Apps/Tasks';
import TasksDetails from './Apps/TasksDetails';
import TasksKanban from './Apps/TasksKanban';
import Users from './Apps/Users';
import UsersResults from './Apps/UsersResults';
import VideosResults from './Apps/VideosResults';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';

import Icons from './Icons';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
const getRoutes = (store) => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            
            <Route path='/custom-navbar-example' component={ CustomNavbarExample } />

            <Route path='/widgets' exact component={Widgets} />
            
            <Route path='/cards' exact component={Cards} />
            
            { /*    Interface Routes   */ }
            <Route component={ Accordions } path="/interface/accordions" />
            <Route component={ Alerts } path="/interface/alerts" />
            <Route component={ Avatars } path="/interface/avatars" />
            <Route component={ BadgesLabels } path="/interface/badges-and-labels" />
            <Route component={ Breadcrumbs } path="/interface/breadcrumbs" />
            <Route component={ Buttons } path="/interface/buttons" />
            <Route component={ Colors } path="/interface/colors" />
            <Route component={ Dropdowns } path="/interface/dropdowns" />
            <Route component={ Images } path="/interface/images" />
            <Route component={ ListGroups } path="/interface/list-groups" />
            <Route component={ MediaObjects } path="/interface/media-objects" />
            <Route component={ Modals } path="/interface/modals" />
            <Route component={ Navbars } path="/interface/navbars" />
            <Route component={ Paginations } path="/interface/paginations" />
            <Route component={ ProgressBars } path="/interface/progress-bars" />
            <Route component={ TabsPills } path="/interface/tabs-pills" />
            <Route component={ TooltipPopovers } path="/interface/tooltips-and-popovers" />
            <Route component={ Typography } path="/interface/typography" />

            { /*    Forms Routes    */ }
            <Route component={ Forms } path="/forms/forms" />
            <Route component={ FormsLayouts } path="/forms/forms-layouts" />
            <Route component={ InputGroups } path="/forms/input-groups" />

            { /*    Graphs Routes   */ }
            <Route component={ ReCharts } path="/graphs/re-charts" />

            { /*    Tables Routes   */ }
            <Route component={ Tables } path="/tables/tables" />

            { /*    Apps Routes     */ }
            <Route component={ AccountEdit } path="/apps/account-edit" />
            <Route component={ BillingEdit } path="/apps/billing-edit" />
            <Route component={ Chat } path="/apps/chat" />
            <Route component={ Clients } path="/apps/clients" />
            <Route component={ EmailDetails } path="/apps/email-details" />
            <Route component={ Files } path="/apps/files/:type"/>
            <Route component={ GalleryGrid } path="/apps/gallery-grid" />
            <Route component={ GalleryTable } path="/apps/gallery-table" />
            <Route component={ ImagesResults } path="/apps/images-results" />
            <Route component={ Inbox } path="/apps/inbox" />
            <Route component={ NewEmail } path="/apps/new-email" />
            <Route component={ ProfileDetails } path="/apps/profile-details" />
            <Route component={ ProfileEdit } path="/apps/profile-edit" />
            <Route component={ Projects } path="/apps/projects/:type" />
            <Route component={ SearchResults } path="/apps/search-results" />
            <Route component={ SessionsEdit } path="/apps/sessions-edit" />
            <Route component={ SettingsEdit } path="/apps/settings-edit" />
            <Route component={ Tasks } path="/apps/tasks/:type" />
            <Route component={ TasksDetails } path="/apps/task-details" />
            <Route component={ TasksKanban } path="/apps/tasks-kanban" />
            <Route component={ Users } path="/apps/users/:type" />
            <Route component={ UsersResults } path="/apps/users-results" />
            <Route component={ VideosResults } path="/apps/videos-results" />

            { /*    Pages Routes    */ }
            <Route component={ ComingSoon } path="/pages/coming-soon" />
            <Route component={ Confirmation } path="/pages/confirmation" />
            <Route component={ Danger } path="/pages/danger" />
            <Route component={ Error404 } path="/pages/error-404" />
            <Route component={ ForgotPassword } path="/pages/forgot-password" />
            <Route component={ LockScreen } path="/pages/lock-screen" />
            <Route component={ Login } path="/pages/login" />
            <Route component={ Register } path="/pages/register" />
            <Route component={ Success } path="/pages/success" />

            <Route path='/icons' exact component={Icons} />
        </Switch>
    );
};

//------ Custom Layout Parts --------
// NOTICE: Provide unique *key*'s as the layout parts are
// provided through an array.
const getNavbars = () => [
    <Route
        component={ CustomNavbarExample.Navbar }
        path="/custom-navbar-example"
        key="navbar__custom-navbar-example"
    />
];

const getSidebars = () => [
];

export {
    getRoutes,
    getNavbars,
    getSidebars
};
