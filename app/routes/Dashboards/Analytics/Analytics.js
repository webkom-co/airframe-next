import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import { LineChart, Line } from 'recharts';
import {
    Container,
    Row,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    CardTitle,
    Table,
    Button,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import {
    MetricVsTarget
} from "../../components/Analytics/MetricVsTarget";
import {
    WebsitePerformance
} from "../../components/Analytics/WebsitePerformance";
import {
    SessionsByDevice
} from "../../components/Analytics/SessionsByDevice";
import {
    CardFooterInfo
} from "../../components/CardFooterInfo";
import {
    LineBarAreaComposedChart
} from "./../../Graphs/ReCharts/components/LineBarAreaComposedChart";
import {
    TinyAreaChart
} from "./../../Graphs/ReCharts/components/TinyAreaChart";
import {
    SimpleLineChart
} from "./../../Graphs/ReCharts/components/SimpleLineChart";

const Analytics = () => (
    <Container>
        <Row>
            <Col lg={ 12 }>
                <div className="d-flex mt-3 mb-5">
                    <HeaderMain 
                        title="Analytics"
                        className="mt-0"
                    />
                    <ButtonToolbar className="ml-auto">
                        <ButtonGroup className="align-self-start mr-2">
                            <UncontrolledButtonDropdown className="ml-auto flex-column">
                                <DropdownToggle color="secondary" outline caret className="mb-2">
                                    <i className="fa fa-globe mr-2"></i>
                                    www.webkom.co
                                </DropdownToggle>
                                <div className="small">
                                    Last 30 Days vs Previous Period
                                </div>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Select Site:
                                    </DropdownItem>
                                    <DropdownItem active>
                                        www.webkom.co
                                    </DropdownItem>
                                    <DropdownItem>
                                        www.spin.webkom.co
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-plus mr-2"></i>
                                        Add New
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </ButtonGroup>
                        <ButtonGroup className="align-self-start mr-2">
                            <UncontrolledButtonDropdown className="ml-auto flex-column">
                                <DropdownToggle color="secondary" outline caret className="mb-2">
                                    <i className="fa fa-calendar-o mr-2"></i>
                                    Last Month
                                </DropdownToggle>
                                <div className="small">
                                    Jan 01, 2017 to Jan 31, 2017
                                </div>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Select Period:
                                    </DropdownItem>
                                    <DropdownItem active>
                                        Last Month
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 3 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 6 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last Year
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Custom...
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </ButtonGroup>
                        <ButtonGroup className="align-self-start mr-2">
                            <UncontrolledButtonDropdown className="ml-auto flex-column">
                                <DropdownToggle color="secondary" outline caret className="mb-2">
                                    <i className="fa fa-calendar-o mr-2"></i>
                                    Previous Period
                                </DropdownToggle>
                                <div className="small">
                                    Jan 01, 2017 to Jan 31, 2017
                                </div>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Select Period:
                                    </DropdownItem>
                                    <DropdownItem active>
                                        Previous Period
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 3 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 6 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last Year
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Custom...
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </ButtonGroup>
                        <ButtonGroup className="align-self-start">
                            <Button color="primary" className="mb-2">
                                <i className="fa fa-check mr-2"></i>
                                Apply
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Metrics vs Targets
                        </CardTitle>
                        <Row className="mb-4">
                            <Col lg={ 4 } className="text-right">
                                <MetricVsTarget 
                                    title="Users"
                                    value="168,793"
                                    progressbarColor="danger"
                                    targetValue="169,001"
                                />
                            </Col>
                            <Col lg={ 4 } className="text-right">
                                <MetricVsTarget 
                                    title="Sessions"
                                    value="529,747"
                                    progressbarValue="67"
                                    progressbarColor="success"
                                    targetValue="782,957"
                                />
                            </Col>
                            <Col lg={ 4 } className="text-right">
                                <MetricVsTarget 
                                    title="Pageviews"
                                    value="1,763,981"
                                    progressbarValue="34"
                                    progressbarColor="success"
                                    targetValue="1,567,334"
                                />
                            </Col>
                        </Row>
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Analytics Audience Metrics
                        </CardTitle>
                        <LineBarAreaComposedChart />
                        <CardFooterInfo />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 6 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Traffic Channels
                        </CardTitle>
                    </CardBody>
                    <Table responsive className="table mb-0">
                        <thead>
                            <tr>
                                <th scope="col" className="bt-0">Channel</th>
                                <th scope="col" className="bt-0">Sessions</th>
                                <th scope="col" className="bt-0">Prev Period</th>
                                <th scope="col" className="text-right bt-0">Change</th>
                                <th scope="col" className="bt-0 text-right">Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">
                                    Organic Search
                                </td>
                                <td className="text-inverse align-middle">
                                    { faker.finance.amount() }
                                </td>
                                <td className="align-middle">
                                    <span data-faker="[[finance.amount]]">949.00</span>
                                </td>
                                <td className="align-middle text-right">
                                    -75,0% 
                                    <i className="fa fa-caret-down text-danger ml-1"></i>
                                </td>
                                <td className="text-right align-middle">
                                    <TinyAreaChart />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <CardBody>                
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Sessions by Device Type
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
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex mb-4">
                            <CardTitle tag="h6">
                                Spend
                            </CardTitle>
                            <span className="ml-auto text-right text-muted">
                                Dec 22, 2016 to<br />
                                Dec 31, 2016 (prev.)
                            </span>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                               $2,890.12
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                23.34%
                            </div>
                            <div className="text-muted">
                                vs { faker.finance .amount() } (prev.)
                            </div>
                        </div>
                    </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 6 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-0">
                            Website Performance
                        </CardTitle>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="Bounce Rate (Avg)"
                                value="46,893"
                                valuePercentIcon="caret-up"
                                valuePercentColor="text-success"
                                valuePercent="23,91"
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="Pageviews (Avg)"
                                value="2.15"
                                valuePercentColor="text-danger"
                                valuePercent="42,82"
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="New Sessions"
                                value="76,40"
                                valuePercentIcon="caret-up"
                                valuePercentColor="text-success"
                                valuePercent="23,91"
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <WebsitePerformance 
                                title="Time on Site (Avg)"
                                value="2m:16s"
                                valuePercentColor="text-danger"
                                valuePercent="65,28"
                            />
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>                
                        <div className="small">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex mb-5">
                            <div>
                                <h6 className="mb-0">
                                    How did my organic traffic perform?
                                </h6>
                                <span className="text-muted">
                                    Dec 22, 2016 to Dec 31, 2016 (prev.)
                                </span>
                            </div>
                            <span className="ml-auto text-right">
                                Goal:
                                <UncontrolledButtonDropdown className="ml-2">
                                    <DropdownToggle color="secondary" outline caret>
                                        All
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Select Goal:</DropdownItem>
                                        <DropdownItem active>All</DropdownItem>
                                        <DropdownItem>Other</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Custom...</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </span>
                        </div>
                        <div className="text-center mb-4">
                            <h6>Organics Sessons</h6>
                            <h2>
                               46,982
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                23.34% <span className="text-muted"> vs { faker.finance .amount() } (prev.)
                                </span>
                            </div>
                        </div>
                        <SimpleLineChart />
                        <div className="small pt-3">
                            <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Analytics;