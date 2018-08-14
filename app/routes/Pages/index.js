import React from 'react';
import { Route } from 'react-router';

import ComingSoon from './ComingSoon';
import Confirmation from './Confirmation';
import Danger from './Danger';
import Error404 from './Error404';
import ForgotPassword from './ForgotPassword';
import LockScreen from './LockScreen';
import Login from './Login';
import Register from './Register';
import Success from './Success';

export default (
    <React.Fragment>
        <Route component={ ComingSoon } path="/pages/coming-soon" />
        <Route component={ Confirmation } path="/pages/confirmation" />
        <Route component={ Danger } path="/pages/danger" />
        <Route component={ Error404 } path="/pages/error-404" />
        <Route component={ ForgotPassword } path="/pages/forgot-password" />
        <Route component={ LockScreen } path="/pages/lock-screen" />
        <Route component={ Login } path="/pages/login" />
        <Route component={ Register } path="/pages/register" />
        <Route component={ Success } path="/pages/success" />
    </React.Fragment>
);
