import React from 'react';
import { Container, Row, Col } from './../../components';

import {
    AdvancedTableA,
    AdvancedTableB,
    BasicTable,
    BorderedTable,
    CellEdit,
    ClearSearch,
    LargeTable,
    SortTable
} from './../../features/ExtendedTable';

export const ExtendedTable = () => (
    <Container className="tables-extended-table">
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
        <Row className="mt-4">
            <Col>
                <BasicTable />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <LargeTable />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <BorderedTable />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <SortTable />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <ClearSearch />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <CellEdit />
            </Col>
        </Row>
    </Container>
);

export default ExtendedTable;
