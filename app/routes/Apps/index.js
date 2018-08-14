import React from 'react';
import { Route } from 'react-router';

import AccountEdit from './AccountEdit';
import BillingEdit from './BillingEdit';
import Chat from './Chat';
import Clients from './Clients';
import EmailDetails from './EmailDetails';
import Files from './Files';
import GalleryGrid from './GalleryGrid';
import GalleryTable from './GalleryTable';
import ImagesResults from './ImagesResults';
import Inbox from './Inbox';
import NewEmail from './NewEmail';
import ProfileDetails from './ProfileDetails';
import ProfileEdit from './ProfileEdit';
import Projects from './Projects';
import SearchResults from './SearchResults';
import SessionsEdit from './SessionsEdit';
import SettingsEdit from './SettingsEdit';
import Tasks from './Tasks';
import TasksDetails from './TasksDetails';
import TasksKanban from './TasksKanban';
import Users from './Users';
import UsersResults from './UsersResults';
import VideosResults from './VideosResults';

export default (
    <React.Fragment>
        <Route component={ AccountEdit } path="/apps/account-edit" />
        <Route component={ BillingEdit } path="/apps/billing-edit" />
        <Route component={ Chat } path="/apps/chat" />
        <Route component={ Clients } path="/apps/clients" />
        <Route component={ EmailDetails } path="/apps/email-details" />
        <Route component={ Files } path="/apps/files/:type"/>
        <Route component={ GalleryGrid } path="/apps/gallery-grid" />
        <Route component={ GalleryTable } path="/apps/gallery-table" />
        <Route component={ ImagesResults } path="/apps/image-results" />
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
    </React.Fragment>
);
