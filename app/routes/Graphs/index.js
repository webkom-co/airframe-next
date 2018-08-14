import React from 'react';
import { Route } from 'react-router';

import ReCharts from './ReCharts';

export default (
    <React.Fragment>
        <Route component={ ReCharts } path="/graphs/re-charts" />
    </React.Fragment>
);
