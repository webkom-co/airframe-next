import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import { Layout } from './../components';
import { NavbarDefault } from './components/NavbarDefault';
import { SidebarDefault } from './components/SidebarDefault';

import './../styles/main.scss';
import './../styles/bootstrap/bootstrap.scss';
import './../styles/plugins/plugins.scss';

import {
    getNavbars,
    getSidebars
} from './../routes';

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <Layout sidebarSlim>
                { /* --------- Navbar ----------- */ }
                <Layout.Navbar>
                    <Switch>
                        { getNavbars() }

                        <Route component={ NavbarDefault } />
                    </Switch>
                </Layout.Navbar>
                { /* -------- Sidebar ------------*/ }
                <Layout.Sidebar>
                    <Switch>
                        { getSidebars() }
                        
                        <Route component={ SidebarDefault } />
                    </Switch>
                </Layout.Sidebar>

                { /* -------- Content ------------*/ }
                <Layout.Content>
                    { children }
                </Layout.Content>
            </Layout>
        )        
    }
}

export default AppLayout;
