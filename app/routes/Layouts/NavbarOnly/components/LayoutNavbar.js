import React from 'react';
import { Link } from 'react-router-dom';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Avatar,
    AvatarAddOn,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NestedDropdown,
    UncontrolledDropdown,
    Form,
    Input,
    Container,
    UncontrolledCollapse
} from './../../../../components';

import { NavbarActivityFeed } from
    './../../../../layout/components/NavbarActivityFeed';
import { NavbarMessages } from
    './../../../../layout/components/NavbarMessages';
import { NavbarUser } from
    './../../../../layout/components/NavbarUser';

export const LayoutNavbar = () => (
    <React.Fragment>
        <Navbar navbar light expand="sm">
            <Container>
                <NavbarToggler id="navbar-navigation-toggler" className="mr-2"/>
                <NavbarBrand>
                    <NavLink tag={ Link } to="/" className="pl-0 pr-2">
                        <i className="fa fa-send mr-3"></i>
                        <span className="h5">
                        airframe
                        </span>
                    </NavLink>
                </NavbarBrand>

                <Form inline className="ml-2 d-none d-sm-block">
                    <Input placeholder="Search..." />
                </Form>

                <Nav className="ml-auto" navbar>
                    <NavbarMessages className="ml-1" />
                    <NavbarActivityFeed className="ml-1" />
                    { /* START Navbar: Dropdown */}
                    <UncontrolledDropdown nav inNavbar className="ml-1">
                        <DropdownToggle nav>
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
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
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    { /* END Navbar: Dropdown */}
                    <NavbarUser className="ml-1" />
                </Nav>
            </Container>
        </Navbar>

        <Navbar navbar light expand="sm" className="py-0">
            <Container>
                <UncontrolledCollapse navbar toggler="#navbar-navigation-toggler">
                    <Nav navbar className="py-1">
                        <NavItem>
                            <NavLink tag={ Link } to="/cards">
                                <i className="fa fa-home"></i>
                            </NavLink>
                        </NavItem>

                        <NestedDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Interface
                            </DropdownToggle>
                            <DropdownMenu>
                                <NestedDropdown.Submenu title="Projects">
                                    <DropdownItem tag={ Link } to="/apps/projects/list">Projects List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/projects/grid">Projects Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Tasks">
                                    <DropdownItem tag={ Link } to="/apps/tasks/list">Tasks List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/grid">Tasks Grid</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/kanban">Tasks Kanban</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/details">Task Details</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Files">
                                    <DropdownItem tag={ Link } to="/apps/files/list">Files List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/files/grid">Files Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                            </DropdownMenu>
                        </NestedDropdown>

                        <NestedDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Forms
                            </DropdownToggle>
                            <DropdownMenu>
                                <NestedDropdown.Submenu title="Projects">
                                    <DropdownItem tag={ Link } to="/apps/projects/list">Projects List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/projects/grid">Projects Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Tasks">
                                    <DropdownItem tag={ Link } to="/apps/tasks/list">Tasks List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/grid">Tasks Grid</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/kanban">Tasks Kanban</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/details">Task Details</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Files">
                                    <DropdownItem tag={ Link } to="/apps/files/list">Files List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/files/grid">Files Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                            </DropdownMenu>
                        </NestedDropdown>

                        <NestedDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Apps
                            </DropdownToggle>
                            <DropdownMenu>
                                <NestedDropdown.Submenu title="Projects">
                                    <DropdownItem tag={ Link } to="/apps/projects/list">Projects List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/projects/grid">Projects Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Tasks">
                                    <DropdownItem tag={ Link } to="/apps/tasks/list">Tasks List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/grid">Tasks Grid</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/kanban">Tasks Kanban</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/tasks/details">Task Details</DropdownItem>
                                </NestedDropdown.Submenu>
                                <NestedDropdown.Submenu title="Files">
                                    <DropdownItem tag={ Link } to="/apps/files/list">Files List</DropdownItem>
                                    <DropdownItem tag={ Link } to="/apps/files/grid">Files Grid</DropdownItem>
                                </NestedDropdown.Submenu>
                            </DropdownMenu>
                        </NestedDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Pages
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={ Link } to="/interface/colors">Colors</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/typography">Typography</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/buttons">Buttons</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/paginations">Paginations</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/images">Images</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <i className="fa fa-ellipsis-h fa-fw"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={ Link } to="/interface/colors">Colors</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/typography">Typography</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/buttons">Buttons</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/paginations">Paginations</DropdownItem>
                                <DropdownItem tag={ Link } to="/interface/images">Images</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    </React.Fragment>
);
