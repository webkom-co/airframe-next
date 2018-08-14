import React from 'react';
import { Route } from 'react-router';

import Forms from './Forms';
import FormsLayouts from './FormsLayouts';
import InputGroups from './InputGroups';

export default (
    <React.Fragment>
        <Route component={ Forms } path="/forms/forms" />
        <Route component={ FormsLayouts } path="/forms/forms-layouts" />
        <Route component={ InputGroups } path="/forms/input-groups" />
    </React.Fragment>
);
