import React from 'react';

import {
    Container,
    Row,
    Col
} from './../../components';

import CounterContainer from './containers/Counter';

const ReduxExample = () => (
    <Container fluid>
        <Row>
            <Col lg={ 12 }>
                <h1>
                    Seconds from navigation:
                </h1>
                <CounterContainer />
            </Col>
        </Row>
    </Container>
);

export default ReduxExample;