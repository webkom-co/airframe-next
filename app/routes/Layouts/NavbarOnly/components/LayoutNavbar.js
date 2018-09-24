import React from 'react';
import { Link } from 'react-router-dom';
import {
    DropdownToggle,
    Nav,
    NavLink,
    Avatar,
    AvatarAddOn,
    Navbar,
    NavbarToggler,
    UncontrolledDropdown,
    Container,
} from './../../../../components';
import { randomAvatar } from './../../../../utilities';

import { NavbarActivityFeed } from
    './../../../../layout/components/NavbarActivityFeed';
import { NavbarMessages } from
    './../../../../layout/components/NavbarMessages';
import { NavbarUser } from
    './../../../../layout/components/NavbarUser';
import { SwitchVersion } from
    './../../../components/Dropdowns/SwitchVersion';
import { DropdownProfile } from
    './../../../components/Dropdowns/DropdownProfile';
import { LogoNavbar } from
    './../../../components/Logos/LogoNavbar';
import { LogotypeNavbar } from
    './../../../components/Logos/LogotypeNavbar';
import { NavbarNavigation } from
    './../../../components/Navbars/NavbarNavigation';

export const LayoutNavbar = () => (
    <React.Fragment>
        <Navbar navbar light expand>
            <Container>
                { /* START Navbar: Left Side */}
                <Nav>
                    { /* START Logo */}
                    <NavLink tag={ Link } to="/" className="align-self-center pr-0 pl-0 pl-md-3">
                        <LogoNavbar />
                    </NavLink>
                    { /* END Logo */}
                    { /* START Navbar: Dropdown */}
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <LogotypeNavbar />
                        </DropdownToggle>
                        <SwitchVersion />
                    </UncontrolledDropdown>
                    { /* END Navbar: Dropdown */}
                </Nav>
                { /* END Navbar: Left Side */}
                { /* START Navbar: Right Side */}
                <Nav className="ml-auto" navbar>
                    <NavbarMessages className="ml-1" />
                    <NavbarActivityFeed className="ml-1" />
                    { /* START Navbar: Dropdown */}
                    <UncontrolledDropdown nav inNavbar className="ml-1">
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
                    { /* END Navbar: Dropdown */}
                    <NavbarUser className="ml-1" />
                </Nav>
                { /* END Navbar: Right Side */}
            </Container>
        </Navbar>

        <Navbar navbar light expand="md">
            <Container>
                <h5 className="d-xs-block d-md-none my-0">
                    Navbar Only
                </h5>
                <NavbarToggler id="navbar-navigation-toggler" className="ml-auto pr-0 b-0">
                    <i className="fa fa-fw fa-bars"></i>
                </NavbarToggler>
                <NavbarNavigation />
            </Container>
        </Navbar>
    </React.Fragment>
);
