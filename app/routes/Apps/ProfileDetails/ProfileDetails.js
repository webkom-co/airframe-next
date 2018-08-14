import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Container,
    Row,
    Col,
    CardHeader,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    InputGroup,
    UncontrolledButtonDropdown,
    InputGroupAddon,
    Input,
    Card,
    ButtonGroup,
    Button,
    Avatar,
    Media,
    CardBody,
    CardFooter,
    CardGroup,
    AvatarAddOn,
    Table,
    TabPane,
    Badge,
    Nav,
    NavItem,
    UncontrolledTabs
} from './../../../components';

import { Profile } from "../../components/Profile";
import { ProfileOverviewCard } from "../../components/Profile/ProfileOverviewCard";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";
import { Chat } from "../../components/Chat/Chat";

const ProfileDetails = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 4 }>
                    <Card>
                        <CardBody>
                            <Profile />
                            <div className="text-center pb-1">
                                <ul className="list-inline">
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">23</h2>
                                        <span>Contracts</span>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">13</h2>
                                        <span>Tasks</span>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">5</h2>
                                        <span>Relases</span>
                                    </li>
                                </ul>
                            </div>                                
                            <Row className="mt-3">
                                <Col sm={ 6 }>
                                    <Button color="primary" block tag={ Link } to="/apps/new-email">
                                        Message
                                    </Button> 
                                </Col>
                                <Col sm={ 6 }>
                                    <Button color="secondary" outline block tag={ Link } to="/apps/profile-edit">
                                        Edit
                                    </Button> 
                                </Col>
                            </Row>
                            <div className="mt-4 mb-2">
                                <span className="small">
                                    Profile
                                </span>
                            </div>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Dicta sapiente earum, necessitatibus commodi eius pariatur 
                                repudiandae cum sunt officiis ex!
                            </p>
                            <div className="mt-4 mb-2">
                                <span className="small">
                                    Labels
                                </span>
                            </div>
                            <div className="text-left mb-4">
                                <Badge pill color="primary" className="mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                                <Badge pill color="secondary" className="mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                                <Badge pill color="primary" className="mr-1">
                                    { faker.commerce.department() }
                                </Badge>
                            </div>
                            <div className="mt-4 mb-2">
                                <span className="small">Contact</span>
                            </div>
                            <DlRowContacts 
                                leftSideClassName="text-left"
                                rightSideClassName="text-right"
                            />
                            <div className="mt-4 mb-2">
                                <span className="small">Address</span>
                            </div>
                            <DlRowAddress 
                                leftSideClassName="text-left"
                                rightSideClassName="text-right"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 8 }>
                    <UncontrolledTabs initialActiveTabId="overview">
                        { /* START Pills Nav */}
                        <Nav pills className="mb-4">
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="overview">
                                    Overview
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="detailContact">
                                    Detail Contact
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="chat">
                                    Chat
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="messages">
                                    Messages <Badge pill color="secondary" className="ml-2">5</Badge>
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                        </Nav>
                        { /* END Pills Nav */}
                        <UncontrolledTabs.TabContent>
                            <TabPane tabId="overview">
                                <CardGroup>
                                    <Card body>
                                        <ProfileOverviewCard 
                                            title="Views"
                                            badgeColor="primary"
                                                badgeTitle="Monthly"
                                            value="6.200"
                                                valueTitle="Total Views"
                                            footerTitle="Last Month"
                                            footerTitleClassName="text-success"
                                                footerIcon="caret-up"
                                                footerValue="23%"
                                        />
                                    </Card>
                                    <Card body>
                                        <ProfileOverviewCard 
                                            title="Orders"
                                            badgeColor="info"
                                                badgeTitle="Annual"
                                            value="75.938"
                                                valueTitle="New Orders"
                                            footerTitle="Last Annual"
                                            footerTitleClassName="text-danger"
                                                footerIcon="caret-down"
                                                footerValue="96%"
                                        />
                                    </Card>
                                    <Card body>
                                        <ProfileOverviewCard 
                                            title="Visits"
                                            badgeColor="secondary"
                                                badgeTitle="Today"
                                            value="75.938"
                                                valueTitle="Total Visits"
                                            footerTitle="Yesterday"
                                            footerTitleClassName="text-success"
                                                footerIcon="caret-up"
                                                footerValue="40%"
                                        />
                                    </Card>
                                </CardGroup>
                            </TabPane>
                            <TabPane tabId="detailContact">
                                <Card body>
                                    <div className="mb-2">
                                        <span className="small">Contact</span>
                                    </div>
                                    <DlRowContacts />
                                    <div className="mt-4 mb-2">
                                        <span className="small">Address</span>
                                    </div>
                                    <DlRowAddress />
                                </Card>
                            </TabPane>
                            <TabPane tabId="chat">
                                <Card>
                                    <CardHeader className="d-flex">
                                        <h6 className="align-self-center mb-0">
                                            Chat with Romaine Weber
                                        </h6>
                                        <UncontrolledButtonDropdown className="align-self-center ml-auto">
                                            <DropdownToggle color="secondary" outline caret size="sm">
                                                <i className="fa fa-gear"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-comment mr-2"></i>
                                                    Private Message
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-search mr-2"></i>
                                                    Search this Thread
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-ban mr-2"></i>
                                                    Block this User
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </CardHeader>
                                    <CardBody>
                                        <Chat />
                                        <div className="mt-4 mb-3 text-center">
                                            <span className="small">
                                                Yesterday
                                            </span>
                                        </div>
                                        <Chat />
                                    </CardBody>
                                    <CardFooter>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="secondary" outline>
                                                    <i className="fa fa fa-paperclip"></i>
                                                </Button>
                                            </InputGroupAddon>
                                            <Input placeholder="Your message..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary">
                                                    <i className="fa fa fa-send"></i>
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </CardFooter>
                                </Card>
                            </TabPane>
                            <TabPane tabId="messages">
                                <Card>
                                    <CardBody className="d-flex">
                                        <ButtonGroup size="sm">
                                            <Button color="secondary" outline active>
                                                Inbox
                                            </Button>
                                            <Button color="secondary" outline>
                                                Archive
                                            </Button>
                                        </ButtonGroup>
                                        <span className="ml-auto">
                                            Showing 1 to 10 of 57 entries
                                        </span>
                                    </CardBody>
                                    { /* START Table */}
                                    <Table className="mb-0" hover responsive>
                                        <thead>
                                            <tr>
                                                <th>From</th>
                                                <th>Subject</th>
                                                <th className="text-right">
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { /* START TR */}
                                            <tr>
                                                <td className="align-middle">
                                                    <Media>
                                                        <Media left className="align-self-center mr-3">
                                                            <Avatar.Image
                                                                size="sm"
                                                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                                                addOns={[
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
                                                        </Media>
                                                        <Media body>
                                                            <div className="mt-0 d-flex">
                                                                { faker.name.firstName() } { faker.name.lastName() }
                                                            </div>
                                                            <span>
                                                                { faker.address.state() }
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td className="align-middle">
                                                    <a href="/emaildetails">
                                                        { faker.company.catchPhrase() }
                                                    </a>
                                                    <br />
                                                    <div>
                                                        { faker.lorem.sentence() }
                                                    </div>
                                                    <Badge color="primary" pill className="mr-1">
                                                        { faker.commerce.department() }   
                                                    </Badge>
                                                </td>
                                                <td className="align-middle text-right">
                                                    30-Jun-2014<br />
                                                    01:54 PM
                                                </td>
                                            </tr>
                                        { /* END TR */}
                                        </tbody>
                                    </Table>
                                    { /* END Table */}
                                    <CardFooter className="d-flex">
                                        <ButtonGroup size="sm">
                                            <Button color="secondary" outline>
                                                <i className="fa fa-fw fa-angle-left"></i>
                                            </Button>
                                            <Button color="secondary" outline>
                                                <i className="fa fa-fw fa-angle-right"></i>
                                            </Button>
                                        </ButtonGroup>
                                        <span className="ml-auto align-self-center">
                                            Showing 1 to 10 of 57 entries
                                        </span>
                                    </CardFooter>
                                </Card>
                            </TabPane>
                        </UncontrolledTabs.TabContent>
                    </UncontrolledTabs>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default ProfileDetails;