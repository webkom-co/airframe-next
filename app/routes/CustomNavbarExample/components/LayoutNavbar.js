import React from 'react';
import {
    Button,
    Nav,
    Navbar,
    NavbarBrand,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
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
                <Nav className="ml-auto">
                    <NavbarMessages className="ml-2" />
                    <NavbarActivityFeed className="ml-2" />
                    <NavbarUser />
                </Nav>
            </Container>
        </Navbar>

        <Navbar>
            <Container>
                <h2 className="h4 m-0">
                    Navbar 11
                </h2>
                <div className="ml-auto">
                    <Form inline>
                        <InputGroup>
                            <Input placeholder="Search..." />
                            <InputGroupAddon addonType="append">
                                <Button color="primary">
                                    <i className="fa fa-fw fa-search"></i>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        
                        <Button className="ml-2" outline>
                            <i className="fa fa-fw fa-columns"></i>
                        </Button>
                    </Form>
                </div>
            </Container>
        </Navbar>
    </React.Fragment>
);
