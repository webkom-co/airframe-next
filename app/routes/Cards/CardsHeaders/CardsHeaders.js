import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    Nav,
    NavItem,
    NavLink,
    TabPane,
    UncontrolledTabs,
    CardHeader,
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

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Cards Headers - Navs" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users201a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users201a">
                                            Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings201b">
                                            Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users201a">
                                        <CardTextDemo 
                                            cardNo="2.01a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings201b">
                                        <CardTextDemo 
                                            cardNo="2.01b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users202a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users202a">
                                            <i className="fa fa-user mr-2"></i> Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings202b">
                                            <i className="fa fa-gear mr-2"></i> Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users202a">
                                        <CardTextDemo 
                                            cardNo="2.02a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings202b">
                                        <CardTextDemo 
                                            cardNo="2.02b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users203a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users203a">
                                            <i className="fa fa-user fa-fw"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings203b">
                                            <i className="fa fa-gear fa-fw"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users203a">
                                        <CardTextDemo 
                                            cardNo="2.03a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings203b">
                                        <CardTextDemo 
                                            cardNo="2.03b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users204a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users204a">
                                            Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings204b">
                                            Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users204a">
                                        <CardTextDemo 
                                            cardNo="2.04a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings204b">
                                        <CardTextDemo 
                                            cardNo="2.04b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users205a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users205a">
                                            <i className="fa fa-user mr-2"></i> Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings205b">
                                            <i className="fa fa-gear mr-2"></i> Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users205a">
                                        <CardTextDemo 
                                            cardNo="2.05a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings205b">
                                        <CardTextDemo 
                                            cardNo="2.05b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users206a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users206a">
                                            <i className="fa fa-user"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings206b">
                                            <i className="fa fa-gear"></i>
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users206a">
                                        <CardTextDemo 
                                            cardNo="2.06a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings206b">
                                        <CardTextDemo 
                                            cardNo="2.06b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 2 */}

        </Container>
    </React.Fragment>
);

export default Cards;