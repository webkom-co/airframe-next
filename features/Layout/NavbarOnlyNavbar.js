import React from 'react';
import {
    Button,
    DropdownToggle,
    Nav,
    NavLink,
    Avatar,
    AvatarAddOn,
    Navbar,
    NavItem,
    NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown,
    Link,
    ThemeConsumer
} from './../../components';
import { randomAvatar } from './../../core/utilities';

import { NavbarActivityFeed } from
    './parts/NavbarActivityFeed';
import { NavbarMessages } from
    './parts/NavbarMessages';
import { NavbarUser } from
    './parts/NavbarUser';
import { LogoThemed } from
    './../LogoThemed/LogoThemed';
import { DropdownProfile } from
    './../Dropdowns/DropdownProfile';
import { NavbarNavigation } from
    './../Navbars/NavbarNavigation';

export const NavbarOnlyNavbar = () => (
    <React.Fragment>
        <Navbar light expand="lg" themed>
            <Link to="/">
                <NavbarBrand>
                    <LogoThemed checkBackground />
                </NavbarBrand>
            </Link>

            <Nav pills>
                <NavItem>
                    <NavLink tag={ NavbarToggler } id="navbar-navigation-toggler" className="b-0">
                        <i className="fa fa-fw fa-bars"></i>
                    </NavLink>
                </NavItem>
            </Nav>

            { /* Navigation with Collapse */ }
            <NavbarNavigation pills />

            { /* END Navbar: Left Side */ }
            { /* START Navbar: Right Side */ }
            <Nav className="ml-auto" pills>
                <NavbarMessages />
                <NavbarActivityFeed />
                { /* START Navbar: Dropdown */ }
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <Avatar.Image
                            size="sm"
                            src={ randomAvatar() }
                            addOns={[
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                />,
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color="danger"
                                    key="avatar-icon-fg"
                                />
                            ]}
                        /> 
                    </DropdownToggle>
                    <DropdownProfile  
                        right  
                    />
                </UncontrolledDropdown>
                { /* END Navbar: Dropdown */ }
                <NavbarUser className="d-none d-lg-block" />
            </Nav>
            { /* END Navbar: Right Side */ }
        </Navbar>

        <Navbar light shadow expand="lg" className="py-3 bg-white">
            <h1 className="mb-0 h4">
                Navbar Only
            </h1>
            
            <ThemeConsumer>
            {
                ({ color }) => (
                    <Button color={ color } className="px-4 my-sm-0">
                        Download <i className="fa ml-1 fa-fw fa-download"></i>
                    </Button>
                )
            }
            </ThemeConsumer>
        </Navbar>
    </React.Fragment>
);
