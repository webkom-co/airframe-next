import React from 'react';
import PropTypes from 'prop-types';
import {
    Layout,
    ThemeProvider,
    ThemeSelector,
    PageConfigConsumer,
} from './../../components';
import { NavbarSidebarWithNavbar } from './NavbarSidebarWithNavbar';
import { SidebarDefault } from './SidebarDefault';

import { favIcons } from './favIcons';

export const LayoutSidebarWithNavbar = ({ isMobile, children }) => (
    <ThemeProvider initialStyle="light" initialColor="primary">
        <Layout sidebarSlim favIcons={ favIcons } isMobile={isMobile}>
            { /* --------- Navbar ----------- */ }
            <Layout.Navbar>
                <NavbarSidebarWithNavbar />
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
LayoutSidebarWithNavbar.propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool
};
