import React from 'react';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';

const NavbarDefault = () => (
    <Navbar light color="none" expand="xs">
        <Nav navbar>
            <NavItem>
                <SidebarTrigger/>
            </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
            <NavbarActivityFeed />
            <NavbarMessages className="ml-2" />
            <NavbarUser className="ml-2" />
        </Nav>
    </Navbar>
);

export { NavbarDefault };
