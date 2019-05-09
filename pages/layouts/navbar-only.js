import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    Col
} from './../../components';
import { LayoutNavbarOnly } from
    './../../features/Layout/LayoutNavbarOnly';

const NavbarOnly = () => (
    <Container>
        <Row>
            <Col>
                <p>
                    You can modify the general layout of the App on a particular page by {' '}
                    providing a customized <code>Layout</code> component to the Page Component's{' '}
                    <code>layoutComponent</code> static field.
                </p>
                <p>
                    Then inside of the <code>Layout.Navbar</code> tag you can place multiple navbars{' '}
                    which will stack one on the other. See this page's code for a more detailed example.
                </p>
            </Col>
        </Row>
    </Container> 
);
NavbarOnly.layoutComponent = LayoutNavbarOnly;

export default NavbarOnly;
