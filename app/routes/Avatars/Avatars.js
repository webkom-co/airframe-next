import React from 'react';
import {
    Row,
    Container,
    Col
} from 'reactstrap';

import { Avatar } from './../../components';

import classes from './Avatars.scss';

const Home = () => (
    <React.Fragment>
        <h1>
            Avatars
        </h1>
        <Container fluid>
            <Row>
                <Col lg={ 4 } className={ classes['avatars-box'] }>
                    <Avatar.Font
                        size="sm"
                        bgColor="danger"
                    >
                        <i className="fa fa-anchor" />
                    </Avatar.Font>
                    <Avatar.Font>
                        <i className="fa fa-user" />
                    </Avatar.Font>
                    <Avatar.Font
                        bgColor="success"
                        size="lg"
                    >
                        <i className="fa fa-bluetooth" />
                    </Avatar.Font>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Home;