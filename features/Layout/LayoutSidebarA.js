import React from 'react';
import PropTypes from 'prop-types';
import {
    Layout,
    ThemeProvider,
    ThemeSelector,
} from './../../components';
import { NavbarSidebarA } from './NavbarSidebarA';
import { SidebarSidebarA } from './SidebarSidebarA';

import { favIcons } from './favIcons';

export const LayoutSidebarA = ({ isMobile, children }) => (
    <ThemeProvider>
        <Layout sidebarSlim favIcons={ favIcons } isMobile={isMobile}>
            { /* --------- Navbar ----------- */ }
            <Layout.Navbar>
                <NavbarSidebarA />
            </Layout.Navbar>
            { /* -------- Sidebar ------------*/ }
            <Layout.Sidebar>
                <SidebarSidebarA />
            </Layout.Sidebar>

            { /* -------- Content ------------*/ }
            <Layout.Content>
                { children }
            </Layout.Content>
            { /* -- Theme Selector (DEMO) ----*/ }
            <ThemeSelector />
        </Layout>
    </ThemeProvider>
);
LayoutSidebarA.propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool
};
