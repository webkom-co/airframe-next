import React from 'react';
import PropTypes from 'prop-types';
import {
    Layout,
    ThemeProvider,
    ThemeSelector
} from './../../components';
import { NavbarOnlyNavbar } from './NavbarOnlyNavbar';
import { favIcons } from './favIcons';

export const LayoutNavbarOnly = ({ isMobile, children }) => (
    <ThemeProvider initialStyle="light" initialColor="primary">
        <Layout sidebarSlim favIcons={ favIcons } isMobile={isMobile}>
            { /* --------- Navbar ----------- */ }
            <Layout.Navbar>
                <NavbarOnlyNavbar />
            </Layout.Navbar>

            { /* -------- Content ------------*/ }
            <Layout.Content>
                { children }
            </Layout.Content>

            { /* -- Theme Selector (DEMO) ----*/ }
            <ThemeSelector />
        </Layout>
    </ThemeProvider>
);
LayoutNavbarOnly.propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool
};
