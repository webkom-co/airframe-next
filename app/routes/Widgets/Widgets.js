import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    CardDeck, 
    Progress,
    CardFooter,
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
import {
    ChatCardFooter
} from "../components/Chat/ChatCardFooter";
import {
    SessionsByDevice
} from "../components/Analytics/SessionsByDevice";
import {
    MetricVsTarget
} from "../components/Analytics/MetricVsTarget";
import {
    Activity
} from "../components/Dropdowns/Activity";

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
                    <CardFooter>
                        <ChatCardFooter />
                    </CardFooter>
                </Card>
                { /* START Card Widget */}
            </Col>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Comments
                            <span className="small ml-1 text-muted">
                                #3.02
                            </span>
                        </CardTitle>
                        <Comment />
                        <Comment />
                        <Comment />
                    </CardBody>
                    <CardFooter>
                        <ChatCardFooter />
                    </CardFooter>
                </Card>
                { /* START Card Widget */}
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Activity
                            <span className="small ml-1 text-muted">
                                #3.04
                            </span>
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem tag={ Link } to="/apps/profile-details">
                            <Activity 
                                iconColorBelow="success"
                                icon="check"
                            />
                        </ListGroupItem>
                        <ListGroupItem tag={ Link } to="/apps/profile-details">
                            <Activity 
                                iconColorBelow="danger"
                                icon="close"
                            />
                        </ListGroupItem>
                        <ListGroupItem tag={ Link } to="/apps/profile-details">
                            <Activity 
                                iconColorBelow="warning"
                                icon="exclamation"
                            />
                        </ListGroupItem>
                        <ListGroupItem tag={ Link } to="/apps/profile-details">
                            <Activity 
                                iconColorBelow="primary"
                                icon="info"
                            />
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                { /* START Card Widget */}
            </Col>
        </Row>
        { /* START Section 3 */}

        { /* START Header 4 */}
        <Row>
            <Col lg={ 12 }>
                <HeaderDemo 
                    no={4} 
                    title="Widgets Graphs"
                    className="mt-5"
                    subTitle={(
                        <React.Fragment>
                            Last Update: <strong>12-23-2018, 4:32:12 PM</strong>, Amount: <strong>2</strong>
                        </React.Fragment>
                    )}
                />
            </Col>
        </Row>
        { /* END Header 4 */}
        { /* START Section 4 */}
        <Row>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Sessions by Device Type
                            <span className="small ml-1 text-muted">
                                #4.01
                            </span>
                        </CardTitle>
                        <Row>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Desktop"
                                    valuePercent="51,5"
                                    valuePercentColor="text-primary"
                                    value="201,345"
                                    valueColor="text-primary"
                                />
                            </Col>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Mobile"
                                    valuePercent="34,4"
                                    valuePercentColor="text-info"
                                    value="134,201"
                                    valueColor="text-info"
                                />
                            </Col>
                            <Col sm={ 4 }>
                                <SessionsByDevice 
                                    title="Tablet"
                                    valuePercent="20,8"
                                    value="81,525"
                                />
                            </Col>
                        </Row>
                        <Progress multi className="mb-4">
                            <Progress bar value="25" />
                            <Progress bar color="info" value="30" />
                            <Progress bar color="secondary" value="45" />
                        </Progress>
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
                { /* END Card Widget */}
            </Col>
            <Col lg={ 6 }>
                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Metrics vs Targets
                            <span className="small ml-1 text-muted">
                                #4.02
                            </span>
                        </CardTitle>
                        <MetricVsTarget 
                            title="Users"
                            value="168,793"
                            progressbarColor="danger"
                            targetValue="169,001"
                        />
                    </CardBody>
                </Card>
                { /* START Card Widget */}
            </Col>
        </Row>
        { /* START Section 3 */}

    </Container>
);

export default Widgets;