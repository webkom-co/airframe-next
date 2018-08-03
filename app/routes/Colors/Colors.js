import React from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const cardText = ({ cardNo }) => (
    <CardText>
        <span className="mr-2 text-muted">
            #{ cardNo }
        </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl elit, porta a sapien eget, fringilla sagittis ex.
    </CardText>
);

const cardContent = (title = 'Some Card Title') => (
    <CardBody>
        <CardTitle>
            { title }
        </CardTitle>
        { cardText }
    </CardBody>
);

import {
    CardColor
} from "../components/CardColor";

const Colors = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Colors" 
                        subTitle="Use any of these color variables as they are or reassign them to more meaningful variables for your project."
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="primary"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="info"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="success"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="warning"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="danger"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="secondary"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="dark"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="light"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
                <Col lg={ 3 } md={ 6 } sm={ 12 }>
                    { /* START Card Color */}
                    <CardColor 
                        color="white"
                        hex="#262626"
                        rgba="65, 839, 220"
                        cmyk="71% 65% 64% 69%"
                    />
                    { /* END Card Color */}
                </Col>
            </Row>
            { /* END Section 1 */}

        </Container>
    </React.Fragment>
);

export default Colors;