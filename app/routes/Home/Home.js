import React from 'react';

import {
    Container,
    Row,
    Col
} from './../../components';

const Home = () => (
    <Container fluid>
        <Row>
            <Col lg={ 12 }>
                <h1>
                    Hello from Home Container
                </h1>
            </Col>
        </Row>
    </Container>
);

export default Home;