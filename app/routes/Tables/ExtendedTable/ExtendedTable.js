import React from 'react';
import { Container, Row, Col } from './../../../components';

import {
    AdvancedTableA,
    AdvancedTableB
} from './components';

export const ExtendedTable = () => (
    <Container>
        <Row>
            <Col>
                <AdvancedTableA />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <AdvancedTableB />
            </Col>
        </Row>
    </Container>
);
