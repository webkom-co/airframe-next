import React from 'react';
import PropTypes from 'prop-types';
import {
    Layout
} from './../../components';
import { NavbarDefault } from './NavbarDefault';
import { SidebarDefault } from './SidebarDefault';

import { favIcons } from './favIcons';

export const LayoutDefault = ({ isMobile, children }) => (
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
    </Layout>
);
LayoutDefault.propTypes = {
    children: PropTypes.node,
    isMobile: PropTypes.bool
};
