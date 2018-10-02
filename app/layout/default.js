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

const favIcons = [
    { rel: 'apple-touch-icon', sizes: '180x180', href: require('./../images/favicons/apple-touch-icon.png') },

    { rel: 'icon', type: 'image/png', sizes: '192x192', href: require('./../images/favicons/android-chrome-192x192.png') },
    { rel: 'icon', type: 'image/png', sizes: '256x256', href: require('./../images/favicons/android-chrome-256x256.png') },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('./../images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('./../images/favicons/favicon-16x16.png') }
];

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <Layout sidebarSlim favIcons={ favIcons }>
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
