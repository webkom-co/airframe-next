import React from 'react';
import PropTypes from 'prop-types';
import App, { Container } from 'next/app';
import Router from 'next/router';
import MobileDetect from 'mobile-detect';
import NProgress from 'nprogress';

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

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class DashboardApp extends App {
    static propTypes = {
        isMobile: PropTypes.bool
    }

    static getInitialProps({ Component, ctx }) {
        const { req } = ctx;
        const pageProps = Component.getInitialProps ? 
            Component.getInitialProps(ctx) : {};

        if (req) {
            const md = new MobileDetect(req.headers['user-agent']);
            return { ...pageProps, isMobile: !!md.mobile() };
        }

        return { ...pageProps, isMobile: false }
    }

    render () {
        const { Component, pageProps, isMobile } = this.props;

        return (
            <Container>
                <Layout sidebarSlim favIcons={ favIcons } isMobile={isMobile}>
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