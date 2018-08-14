import React from 'react';
import { Route } from 'react-router';

import Accordions from './Accordions';
import Alerts from './Alerts';
import Avatars from './Avatars';
import BadgesLabels from './BadgesLabels';
import Breadcrumbs from './Breadcrumbs';
import Buttons from './Buttons';
import Colors from './Colors';
import Dropdowns from './Dropdowns';
import Images from './Images';
import ListGroups from './ListGroups';
import MediaObjects from './MediaObjects';
import Modals from './Modals';
import Navbars from './Navbars';
import Paginations from './Paginations';
import ProgressBars from './ProgressBars';
import TabsPills from './TabsPills';
import TooltipPopovers from './TooltipsPopovers';
import Typography from './Typography';

export default (
    <React.Fragment>
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
    </React.Fragment>
);
