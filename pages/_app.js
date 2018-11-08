import React from 'react';
import App, { Container } from 'next/app';

import {
    Layout
} from './../components';
import { DefaultNavbar } from './../features/Layout/DefaultNavbar';
import { DefaultSidebar } from './../features/Layout/DefaultSidebar';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
import './../styles/plugins/plugins.scss';

const favIcons = [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/static/images/favicons/apple-touch-icon.png' },

    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/static/images/favicons/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/static/images/favicons/android-chrome-256x256.png' },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/images/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/images/favicons/favicon-16x16.png' }
];

export default class DashboardApp extends App {
    render () {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Layout sidebarSlim favIcons={ favIcons }>
                    { /* --------- Navbar ----------- */ }
                    <Layout.Navbar>
                        <DefaultNavbar />
                    </Layout.Navbar>
                    { /* -------- Sidebar ------------*/ }
                    <Layout.Sidebar>
                        <DefaultSidebar />
                    </Layout.Sidebar>

                    { /* -------- Content ------------*/ }
                    <Layout.Content>
                        <Component { ...pageProps } />
                    </Layout.Content>
                </Layout>
            </Container>
        );
    }
}