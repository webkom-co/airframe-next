import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Navbar, 
    Nav, 
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from './../../../components';

const Navbar104 = () => (
<React.Fragment>
    { /* START Navbar */}
    <Navbar color="white" light expand="md">
        <Nav>
            <NavItem>
                <NavLink tag={ Link } to="/" className="pr-0 pl-1">
                    <i className="fa fa-home"></i>
                </NavLink>
            </NavItem>
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    Dashboards
                    <i className="fa fa-angle-down ml-2"></i>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        ...
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    Layouts
                    <i className="fa fa-angle-down ml-2"></i>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        ...
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    Graphs
                    <i className="fa fa-angle-down ml-2"></i>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        ...
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    Forms
                    <i className="fa fa-angle-down ml-2"></i>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        ...
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    Apps
                    <i className="fa fa-angle-down ml-2"></i>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        ...
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    Pages
                    <i className="fa fa-angle-down ml-2"></i>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        Select:
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/register">
                        Register
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/login">
                        Login
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/forgotpassword">
                        Forgot Password
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/lockscreen">
                        Lock Screen
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/error404">
                        Error 404
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/confirmation">
                        Confirmation
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/success">
                        Success
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/danger">
                        Danger
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/pages/comingsoon">
                        Coming Soon
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    <i className="fa fa-ellipsis-h"></i>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        Variuos:
                    </DropdownItem>
                    <DropdownItem>
                        Widgets
                    </DropdownItem>
                    <DropdownItem>
                        Cards
                    </DropdownItem>
                    <DropdownItem>
                        Tables
                    </DropdownItem>
                    <DropdownItem>
                        Icons
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
        </Nav>
        { /* END Left Side */}
    </Navbar>
    { /* END Navbar */}
</React.Fragment>
)


export { Navbar104 };
