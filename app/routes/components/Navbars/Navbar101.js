import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Navbar, 
    Media, 
    Nav, 
    Input,
    Form, 
    DropdownToggle,
    IconWithBadge,
    Badge,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Avatar, 
    AvatarAddOn 
} from './../../../components';

const Navbar101 = () => (
<React.Fragment>
    { /* START Navbar */}
    <Navbar color="white" light expand="md">
        { /* START Left Side */}
        <span className="text-navbar">
            <Media>
                <Media left className="mr-3 align-self-center">
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
                </Media>
                <Media body>
                    <span className="mt-0 d-flex mb-0">
                        { faker.name.firstName() } { faker.name.lastName() }
                    </span>
                    <p className="small mb-0">
                        { faker.name.jobTitle() }
                    </p>
                </Media>
            </Media>
        </span>
        { /* END Left Side */}
        { /* START Right Side */}
        <Nav className="ml-auto" navbar>
            <Form inline className="mr-3">
                <Input type="text" name="text" placeholder="Search for..." />
            </Form>
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar className="mr-2">
                <DropdownToggle nav>
                    <IconWithBadge
                        badge={ <Badge pill color="warning">2</Badge> }
                    >
                        <i className="fa fa-envelope-o fa-fw" />
                    </IconWithBadge>
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
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar className="mr-2">
                <DropdownToggle nav>
                    <IconWithBadge
                        badge={ <Badge pill color="primary">6</Badge> }
                    >
                        <i className="fa fa-envelope-o fa-fw" />
                    </IconWithBadge>
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
            <NavItem>
                <NavLink tag={ Link } to="/pages/login">
                    <i className="fa fa-power-off"></i>
                </NavLink>
            </NavItem>
        </Nav>
        { /* END Right Side */}
    </Navbar>
    { /* END Navbar */}
</React.Fragment>
)


export { Navbar101 };
