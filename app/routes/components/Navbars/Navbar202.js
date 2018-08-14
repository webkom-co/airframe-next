import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Navbar, 
    Nav, 
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    Button,
    Input,
    Row,
    Col,
    ExtendedDropdown,
    ListGroup,
    ListGroupItem,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from './../../../components';

const Navbar202 = () => (
<React.Fragment>
    { /* START Navbar */}
    <Navbar color="white" light expand="md">
        <Nav>
            <NavItem>
                <NavLink tag={ Link } to="/" className="pl-1">
                    <i className="fa fa-home"></i>
                </NavLink>
            </NavItem>
            <span className="navbar-text">
                /
            </span>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="pr-0">
                    <h5 className="mb-0">
                        Dashboards
                        <i className="fa fa-angle-down ml-2"></i>
                    </h5>
                </DropdownToggle>
                <ExtendedDropdown>
                    <ExtendedDropdown.Section>
                       <Row>
                            <Col lg={ 4 }>
                                <Nav vertical>
                                    <NavItem className="small my-2">
                                        Menu
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Analytics
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Widgets
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Cards
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Graphs
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Tables
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Icons
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col lg={ 4 }>
                                <Nav vertical>
                                    <NavItem className="small my-2">
                                        Interface
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Colors
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Typography
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Buttons
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Paginations
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Images
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            Avatars
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                       </Row>
                    </ExtendedDropdown.Section>
                </ExtendedDropdown>
            </UncontrolledDropdown>

        </Nav>
        { /* END Left Side */}
    </Navbar>
    { /* END Navbar */}
</React.Fragment>
)


export { Navbar202 };
