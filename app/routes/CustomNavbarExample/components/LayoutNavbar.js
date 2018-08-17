import React from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NestedDropdown,
    Form,
    Input,
    Container
} from './../../../components';

import { NavbarActivityFeed } from
    './../../../layout/components/NavbarActivityFeed';
import { NavbarMessages } from
    './../../../layout/components/NavbarMessages';
import { NavbarUser } from
    './../../../layout/components/NavbarUser';

export const LayoutNavbar = () => (
    <React.Fragment>
        <Navbar>
            <Container>
                <NavbarBrand>
                    Logo?
                </NavbarBrand>

                <Form inline className="ml-2">
                    <Input placeholder="Search..." />
                </Form>

                <Nav className="ml-auto">
                    <NavbarMessages />
                    <NavbarActivityFeed className="ml-2" />
                    <NavbarUser className="ml-2" />
                </Nav>
            </Container>
        </Navbar>

        <Navbar>
            <Container>
                <Nav>
                    <NestedDropdown>
                        <DropdownToggle caret>
                            Apps
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>First Link</DropdownItem>
                            <DropdownItem>Second Link</DropdownItem>
                            <NestedDropdown.Submenu title="Third Link">
                                <DropdownItem>First Nested Link</DropdownItem>
                                <DropdownItem>Second Nested Link</DropdownItem>
                            </NestedDropdown.Submenu>
                        </DropdownMenu>
                    </NestedDropdown>
                </Nav>
            </Container>
        </Navbar>
    </React.Fragment>
);
