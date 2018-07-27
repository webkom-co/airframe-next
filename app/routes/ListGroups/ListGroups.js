import React from 'react';
import faker from 'faker';

import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Badge,
    Avatar,
    AvatarAddOn,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
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

const ListGroups = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Basic Examples" 
                        subTitle="List groups are a flexible and powerful component for displaying a series of content."
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                             List Groups: Basic Example
                             <span className="small ml-1 text-muted">
                                #1.01
                            </span>
                        </h6>
                        <p>
                            The most basic list group is an unordered list with 
                            list items and the proper classes. Example: <code>
                                &lt;ListGroupItem&gt; ... &lt;/ListGroupItem&gt;
                            </code>.
                        </p>
                        <ListGroup>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            List Groups: Disabled Items
                            <span className="small ml-1 text-muted">
                                #1.03
                            </span>
                        </h6>
                        <p>
                            Add <code>disabled</code> to a <code>ListGroupItem</code> to 
                            make it appear disabled.
                        </p>
                        <ListGroup>
                            <ListGroupItem disabled>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            List Groups: Links and Buttons (Disabled)
                             <span className="small ml-1 text-muted">
                                #1.05
                            </span>
                        </h6>
                        <p>
                            Add <code>active</code> to a <code>ListGroupItem</code> to 
                            make it appear active.
                        </p>
                        <ListGroup>
                            <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            List Groups: Contextual Classes
                             <span className="small ml-1 text-muted">
                                #1.07
                            </span>
                        </h6>
                        <p>
                            From the color palette, add to <code>&lt;ListGroupItem&gt;</code> for example: <code>success</code>, <code>primary</code> etc.
                        </p>
                        <ListGroup>
                            <ListGroupItem color="white">Cras justo odio</ListGroupItem>
                            <ListGroupItem color="primary">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem color="secondary">Morbi leo risus</ListGroupItem>
                            <ListGroupItem color="success">Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem color="danger">Vestibulum at eros</ListGroupItem>
                            <ListGroupItem color="warning">Cras justo odio</ListGroupItem>
                            <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem color="light">Morbi leo risus</ListGroupItem>
                            <ListGroupItem color="dark">Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                            List Groups: With Badges 
                             <span className="small ml-1 text-muted">
                                #1.09
                            </span>
                        </h6>
                        <p>
                            Add Badge, for example: 
                            <code>&lt;Badge pill className="ml-auto align-self-center"&gt;14&lt;/Badge&gt;</code>.
                        </p>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between d-flex">
                                Cras justo odio 
                                <Badge pill className="ml-auto align-self-center">14</Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between d-flex">
                                Dapibus ac facilisis in
                                <Badge pill className="ml-auto align-self-center">2</Badge>
                            </ListGroupItem>
                            <ListGroupItem className="justify-content-between d-flex">
                                Morbi leo risus
                                <Badge pill className="ml-auto align-self-center">1</Badge>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                             List Groups: Active Items (Anchors)
                             <span className="small ml-1 text-muted">
                                #1.02
                            </span>
                        </h6>
                        <p>
                            The most basic list group is an unordered list with 
                            list items and the proper classes. Example: <code>
                                &lt;ListGroupItem active tag="a" href="#" action&gt; ... &lt;/ListGroupItem&gt;
                            </code>.
                        </p>
                        <ListGroup>
                            <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                             List Groups: Active Items (Buttons)
                             <span className="small ml-1 text-muted">
                                #1.04
                            </span>
                        </h6>
                        <p>
                            The most basic list group is an unordered list with 
                            list items and the proper classes. Example: <code>
                                &lt;ListGroupItem active tag="a" href="#" action&gt; ... &lt;/ListGroupItem&gt;
                            </code>.
                        </p>
                        <ListGroup>
                            <ListGroupItem active tag="button" href="#" action>Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="button" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="button" href="#" action>Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="button" href="#" action>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem disabled tag="button" href="#" action>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                             List Groups: Flush
                             <span className="small ml-1 text-muted">
                                #1.06
                            </span>
                        </h6>
                        <p>
                            Often used in combination with Cards. Just add to <code>&lt;ListGroup flush&gt;</code>.
                        </p>
                        <ListGroup flush>
                            <ListGroupItem tag="button" href="#" action>Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="button" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="button" href="#" action>Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="button" href="#" action>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem tag="button" href="#" action>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                    { /* START Example */}
                    <div className="mb-5">
                        <h6>
                             List Groups: Custom Content
                             <span className="small ml-1 text-muted">
                                #1.09
                            </span>
                        </h6>
                        <p>
                            Here is an example of combination 
                            <code>&lt;ListGroupItemHeading className="h6"&gt;</code> 
                            and <code>&lt;ListGroupItemText&gt;</code>
                        </p>
                        <ListGroup>
                            <ListGroupItem active>
                                <ListGroupItemHeading className="h6">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-0">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading className="h6">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-0">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading className="h6">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-0">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    { /* END Example */}
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="UI Examples"
                        className="mt-5"
                        subTitle="The most commonly used UI/UX elements in applications."
                    />
                </Col>
            </Row>
            { /* END Header 2 */}


        </Container>
    </React.Fragment>
);

export default ListGroups;