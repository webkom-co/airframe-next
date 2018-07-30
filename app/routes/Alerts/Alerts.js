import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    Alert,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Badge,
    Button,
    Media,
    Avatar,
    AvatarAddOn,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    CustomInput,
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

const Alerts = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Alerts Default" 
                        subTitle="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Alerts don't have default classes, only base and modifier classes: choose from primary, success, info, warning or danger. Wrap any text and an optional dismiss button in .alert and one of the five contextual classes (e.g., .alert-success) for basic alert messages."
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Primary
                             <span className="small ml-1 text-muted">
                                #1.01
                            </span>
                        </h6>
                        <Alert color="primary">
                            <h6 className="mb-1">Morning!</h6>
                            Were glad to see you again and wish you a nice day.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Danger
                             <span className="small ml-1 text-muted">
                                #1.02
                            </span>
                        </h6>
                        <Alert color="danger">
                            <h6 className="mb-1">Oh Snap!</h6>
                            Change a few things up and try submitting again.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Info
                             <span className="small ml-1 text-muted">
                                #1.03
                            </span>
                        </h6>
                        <Alert color="info">
                            <h6 className="mb-1">Heads Up!</h6>
                            This alert needs your attention, but its not super important.
                        </Alert>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Warning
                             <span className="small ml-1 text-muted">
                                #1.04
                            </span>
                        </h6>
                        <Alert color="warning">
                            <h6 className="mb-1">Warning!</h6>
                            Better check yourself, youre not looking too good.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Success
                             <span className="small ml-1 text-muted">
                                #1.05
                            </span>
                        </h6>
                        <Alert color="success">
                            <h6 className="mb-1">Well Done!</h6>
                            You successfully read this important alert message.
                        </Alert>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-4">
                        <h6>
                             Alert: Dark
                             <span className="small ml-1 text-muted">
                                #1.06
                            </span>
                        </h6>
                        <Alert color="dark">
                            <h6 className="mb-1">Attention!</h6>
                            This alert needs your attention, but its not important.
                        </Alert>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 1 */}



        </Container>
    </React.Fragment>
);

export default Alerts;