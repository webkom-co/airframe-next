import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    CardDeck, 
    CardColumns,
    CardTitle,
} from './../../components'
import {
    HeaderDemo
} from "../components/HeaderDemo";
import {
    TasksCardGrid
} from "../components/Tasks/TasksCardGrid";
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    GalleryCard
} from "../components/Gallery/GalleryCard";
import {
    UsersResultsCard
} from "../components/SearchResults/UsersResultsCard";
import {
    ImagesResultsCard
} from "../components/SearchResults/ImagesResultsCard";
import {
    Attachment
} from "../components/Attachment";
import {
    Comment
} from "../components/Comment";
import {
    Chat
} from "../components/Chat/Chat";



export const Widgets = () => (
    <Container>
        { /* START Header 1 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={1} 
                    title="Widgets Metrics" 
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>4</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 1 */}
        { /* START Section 1 */}
        <CardDeck>
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <CardTitle tag="h6" className="mb-3">
                        Example
                        <span className="small ml-1 text-muted">
                            #1.01
                        </span>
                    </CardTitle>
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard />
                </CardBody>
            </Card>
            { /* START Card Widget */}
        </CardDeck>
        { /* START Section 1 */}

        { /* START Header 2 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={2} 
                    title="Widgets Grids"
                    className="mt-5"
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>4</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 2 */}
        { /* START Section 2 */}
        <CardColumns>
            <TasksCardGrid />
            <GalleryCard />
            <UsersResultsCard />
            <ImagesResultsCard />
        </CardColumns>
        { /* START Section 2 */}

        { /* START Header 3 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={3} 
                    title="Widgets Texts"
                    className="mt-5"
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>4</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 3 */}
        { /* START Section 3 */}
        <Row>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Attachments
                            <span className="small ml-1 text-muted">
                                #3.01
                            </span>
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem tag="a" href="/inbox" action>
                            <Attachment />
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="/inbox" action>
                            <Attachment />
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="/inbox" action>
                            <Attachment />
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* START Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Chat
                            <span className="small ml-1 text-muted">
                                #3.03
                            </span>
                        </CardTitle>
                        <Chat />
                        <Chat />
                        <Chat />
                    </CardBody>
                </Card>
                { /* START Card Widget */}
            </Col>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Comments
                            <span className="small ml-1 text-muted">
                                #3.02
                            </span>
                        </CardTitle>
                        <Comment />
                        <Comment />
                        <Comment />
                    </CardBody>
                </Card>
                { /* START Card Widget */}
            </Col>
        </Row>
        { /* START Section 3 */}

    </Container>
);

export default Widgets;