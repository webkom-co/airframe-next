import React from 'react';
import PropTypes from 'prop-types';
import App, { Container } from 'next/app';
import Router from 'next/router';
import MobileDetect from 'mobile-detect';
import NProgress from 'nprogress';

import { LayoutSidebarWithNavbar } from './../features/Layout/LayoutSidebarWithNavbar';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
import './../styles/plugins/plugins.scss';
import './../styles/plugins/plugins.css';

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
        const commonProps = {
            pageProps
        };

        if (req) {
            const md = new MobileDetect(req.headers['user-agent']);
            return {
                ...commonProps,
                isMobile: !!md.mobile()
            };
        }

        return {
            ...commonProps,
            isMobile: false
        }
    }

    render () {
        const { Component, pageProps, isMobile } = this.props;
        const LayoutComponent = Component.layoutComponent || LayoutSidebarWithNavbar;

        return (
            <Container>
                <LayoutComponent isMobile={ isMobile }>
                    <Component { ...pageProps } />
                </LayoutComponent>
            </Container>
        );
    }
}