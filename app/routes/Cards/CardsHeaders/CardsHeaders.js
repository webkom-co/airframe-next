import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    CardBody,
    CardTitle
} from './../../../components';

import {
    HeaderDemo
} from "../../components/HeaderDemo";
import {
    CardTextDemo
} from "../../components/CardTextDemo";


const Cards = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Cards Headers - Text" 
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Default Header
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Above Small Text<br />
                                <span className="small">
                                    Small Text
                                </span>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.02"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Default Small Text
                                <Badge className="ml-2" color="primary">
                                    3
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.03"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Default Small Text
                                <Badge className="ml-2 ml-auto" color="primary">
                                    Updated
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.04"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                <i className="fa fa-gear mr-2"></i> Header Left Icon
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.05"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Right Icon 
                                <i className="fa fa-gear ml-2"></i>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.06"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Header Right Icon 
                                <i className="fa fa-gear ml-auto"></i>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="text-center">
                                Header Center
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.08"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                <span className="small">
                                    Small Text
                                </span>
                                <br />
                                Header Above Small Text
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.09"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Header Right Side Pill
                                <Badge className="ml-2 ml-auto" color="primary" pill>
                                    New
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.10"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Left Pill
                                <Badge className="ml-2" color="primary" pill>
                                    4
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.11"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 1 */}

        </Container>
    </React.Fragment>
);

export default Cards;