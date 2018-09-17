import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    Col
} from './../../../components';

export const LayoutA = () => (
    <Container>
        <Row>
            <Col>
                { faker.lorem.paragraphs() }
            </Col>
        </Row>
    </Container>
);
