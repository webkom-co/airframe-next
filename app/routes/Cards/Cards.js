import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from './../../components';

const cardText = (
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl elit, porta a sapien eget, fringilla sagittis ex. Cras nec tellus euismod, interdum lorem in, volutpat diam. Proin pretium tellus ac auctor eleifend. Nullam auctor nulla at ex sagittis, nec euismod sapien feugiat. Vestibulum auctor ligula in risus aliquet rhoncus. Sed a arcu est. Proin vitae nisi nisl. Vivamus at arcu convallis, elementum massa ac, euismod nisl. Vivamus sapien felis, aliquam vestibulum aliquam ut, iaculis eu nisi.
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

const Cards = () => (
    <React.Fragment>
        <Container fluid>
            <Row>
                <Col lg={ 12 }>
                    <h1>
                        Cards
                    </h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={ 4 }>
                    <Card>
                        <CardHeader>
                            Default Header
                        </CardHeader>
                        <CardBody>
                            { cardText }
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card>
                        <CardHeader
                            type="background"
                            color="success"
                        >
                            Header with Background
                        </CardHeader>
                        <CardBody>
                            { cardText }
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card>
                        <CardHeader
                            type="border"
                            color="warning"
                        >
                            Header with Background
                        </CardHeader>
                        <CardBody>
                            { cardText }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={ 4 }>
                    <Card color="primary">
                        { cardContent("Border Color") }
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card type="side-border" color="danger">
                        { cardContent("Side Color") }
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card type="background" color="info">
                        { cardContent("Background Color") }
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={ 4 }>
                    <Card type="shadow">
                        { cardContent("Shadow") }
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card type="border-dot" color="400">
                        { cardContent("Border Dotted") }
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card type="border-dash" color="400">
                        { cardContent("Border Dashed") }
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col lg={ 4 }>
                    <Card type="none">
                        { cardContent("Plain") }
                    </Card>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Cards;