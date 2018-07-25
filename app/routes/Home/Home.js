import React from 'react';
import faker from 'faker';

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
                    Hello { faker.name.firstName() } { faker.name.lastName() }
                </h1>
            </Col>
        </Row>
    </Container>
);

export default Home;