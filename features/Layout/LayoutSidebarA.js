import React from 'react';
import PropTypes from 'prop-types';
import {
    Layout
} from './../../components';
import { NavbarSidebarA } from './NavbarSidebarA';
import { SidebarSidebarA } from './SidebarSidebarA';

import { favIcons } from './favIcons';

export const LayoutSidebarA = ({ isMobile, children }) => (
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
    </Layout>
);
LayoutSidebarA.propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool
};
