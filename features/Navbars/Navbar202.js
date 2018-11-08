import React from 'react';

import { 
    Link,
    Navbar, 
    Nav, 
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarActivityFeed } from
    './../Layout/NavbarActivityFeed';
import { NavbarMessages } from
    './../Layout/NavbarMessages';
import { NavbarUser } from
    './../Layout/NavbarUser';

const Navbar202 = () => (
<React.Fragment>
    { /* START Navbar */}
    <Navbar color="white" light expand className="mb-3">
        { /* START Navbar: Left Side */}
        <Nav navbar>
            <NavItem className="mr-3">
                <SidebarTrigger/>
            </NavItem>
            <NavItem className="navbar-brand h5 mb-0 d-lg-none">
                <Link to="/">
                    react.bs4
                </Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <span className="navbar-text">
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                    <Link to="/">Start</Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                    Page Link
                </span>
            </NavItem>
        </Nav>
        { /* END Navbar: Left Side */}
        { /* START Navbar: Right Side */}
        <Nav className="ml-auto" navbar>
            <NavbarMessages className="ml-1" />
            <NavbarActivityFeed className="ml-1" />
            <NavbarUser className="ml-1" />
        </Nav>
        { /* END Navbar: Right Side */}
    </Navbar>
    { /* END Navbar */}
</React.Fragment>
)


export { Navbar202 };
