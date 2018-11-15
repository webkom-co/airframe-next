import React from 'react';
import PropTypes from 'prop-types';
import {
    Layout
} from './../../components';
import { NavbarOnlyNavbar } from './NavbarOnlyNavbar';
import { favIcons } from './favIcons';

export const LayoutNavbarOnly = ({ isMobile, children }) => (
    <Layout sidebarSlim favIcons={ favIcons } isMobile={isMobile}>
        { /* --------- Navbar ----------- */ }
        <Layout.Navbar>
            <NavbarOnlyNavbar />
        </Layout.Navbar>

        { /* -------- Content ------------*/ }
        <Layout.Content>
            { children }
        </Layout.Content>
    </Layout>
);
LayoutNavbarOnly.propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool
};
