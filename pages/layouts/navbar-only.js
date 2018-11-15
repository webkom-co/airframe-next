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
                <div className="d-flex mb-3">
                    <h3 className="pb-0">Navbar Only</h3>
                    <span className="badge badge-secondary badge-pill align-self-center ml-2">Default</span>
                </div>
                { faker.lorem.paragraphs() }
            </Col>
        </Row>
    </Container> 
);
NavbarOnly.layoutComponent = LayoutNavbarOnly;

export default NavbarOnly;
