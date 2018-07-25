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
<<<<<<< Updated upstream
                    Hello from { faker.name.firstName() } { faker.name.lastName() }
=======
                    Hello { faker.name.firstName() } { faker.name.lastName() }
>>>>>>> Stashed changes
                </h1>
            </Col>
        </Row>
    </Container>
);

export default Home;