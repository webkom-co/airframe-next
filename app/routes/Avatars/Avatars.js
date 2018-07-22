import React from 'react';
import {
    Row,
    Container,
    Col
} from 'reactstrap';

import { Avatar, AvatarAddOn } from './../../components';

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
                        addOns={[
                            <AvatarAddOn.Badge color="success">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                fgColor="success"
                            />
                        ]}
                    >
                        <i className="fa fa-anchor" />
                    </Avatar.Font>
                    <Avatar.Font>
                        <i className="fa fa-user" />
                    </Avatar.Font>
                    <Avatar.Font
                        bgColor="success"
                        size="lg"
                        addOns={[
                            <AvatarAddOn.Badge color="danger">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="danger"
                            />
                        ]}
                    >
                        <i className="fa fa-bluetooth" />
                    </Avatar.Font>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Home;