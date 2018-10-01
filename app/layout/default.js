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
    { rel: 'apple-touch-icon', sizes: '57x57', href: require('./../images/favicons/apple-icon-57x57.png') },
    { rel: 'apple-touch-icon', sizes: '60x60', href: require('./../images/favicons/apple-icon-60x60.png') },
    { rel: 'apple-touch-icon', sizes: '72x72', href: require('./../images/favicons/apple-icon-72x72.png') },
    { rel: 'apple-touch-icon', sizes: '76x76', href: require('./../images/favicons/apple-icon-76x76.png') },
    { rel: 'apple-touch-icon', sizes: '114x114', href: require('./../images/favicons/apple-icon-114x114.png') },
    { rel: 'apple-touch-icon', sizes: '120x120', href: require('./../images/favicons/apple-icon-120x120.png') },
    { rel: 'apple-touch-icon', sizes: '144x144', href: require('./../images/favicons/apple-icon-144x144.png') },
    { rel: 'apple-touch-icon', sizes: '152x152', href: require('./../images/favicons/apple-icon-152x152.png') },
    { rel: 'apple-touch-icon', sizes: '180x180', href: require('./../images/favicons/apple-icon-152x152.png') },

    { rel: 'icon', type: 'image/png', sizes: '192x192', href: require('./../images/favicons/android-icon-192x192.png') },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('./../images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: require('./../images/favicons/favicon-96x96.png') },
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
