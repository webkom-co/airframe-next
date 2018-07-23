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
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="success"
                                key="avatar-icon-fg"
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
                            <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="danger"
                                key="avatar-icon-fg"
                            />
                        ]}
                    >
                        <i className="fa fa-bluetooth" />
                    </Avatar.Font>
                </Col>

                <Col lg={ 4 } className={ classes['avatars-box'] }>
                    <Avatar.Font
                        size="sm"
                        bgColor="danger"
                        addOns={[
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="success"
                                key="avatar-icon-fg"
                            />
                        ]}
                    >
                        MK
                    </Avatar.Font>
                    <Avatar.Font>
                        SM
                    </Avatar.Font>
                    <Avatar.Font
                        bgColor="success"
                        size="lg"
                        addOns={[
                            <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="danger"
                                key="avatar-icon-fg"
                            />
                        ]}
                    >
                        PS
                    </Avatar.Font>
                </Col>

                <Col lg={ 4 } className={ classes['avatars-box'] }>
                    <Avatar.Image
                        size="sm"
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        addOns={[
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="success"
                                key="avatar-icon-fg"
                            />
                        ]}
                    />
                    <Avatar.Image
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        addOns={[
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                12
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="success"
                                key="avatar-icon-fg"
                            />
                        ]}
                    />
                    <Avatar.Image
                        size="lg"
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        addOns={[
                            <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="white"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="danger"
                                key="avatar-icon-fg"
                            />
                        ]}
                    />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Home;