import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from './../components';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
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
                    { getNavbars() }
                </Layout.Navbar>
                { /* -------- Sidebar ------------*/ }
                <Layout.Sidebar>
                    { getSidebars() }
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
