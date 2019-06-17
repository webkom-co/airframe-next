import React from 'react';
import PropTypes from 'prop-types';
import {
    Layout,
    ThemeProvider,
    ThemeSelector,
    PageConfigConsumer,
} from './../../components';
import { NavbarDefault } from './NavbarDefault';
import { SidebarDefault } from './SidebarDefault';

import { favIcons } from './favIcons';

export const LayoutDefault = ({ isMobile, children }) => (
    <ThemeProvider initialStyle="light" initialColor="primary">
        <Layout sidebarSlim favIcons={ favIcons } isMobile={isMobile}>
            { /* --------- Navbar ----------- */ }
            <Layout.Navbar>
                <NavbarDefault />
            </Layout.Navbar>
            { /* -------- Sidebar ------------*/ }
            <Layout.Sidebar>
                <SidebarDefault />
            </Layout.Sidebar>

            { /* -------- Content ------------*/ }
            <Layout.Content>
                { children }
            </Layout.Content>

            { /* -- Theme Selector (DEMO) ----*/ }
            <PageConfigConsumer>
            {
                ({ sidebarHidden, navbarHidden }) => (
                    <ThemeSelector styleDisabled={ sidebarHidden && navbarHidden } />
                )
            }
            </PageConfigConsumer>
        </Layout>
    </ThemeProvider>
);
LayoutDefault.propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool
};
