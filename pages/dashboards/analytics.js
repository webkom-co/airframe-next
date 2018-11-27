import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import faker from 'faker';
import {
    Container,
    Grid,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardHeader,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    Button,
    Media
} from './../../components';
import { applyColumn } from './../../components/FloatGrid';

import { HeaderMain } from "../../features/HeaderMain";
import { MetricVsTarget } from "../../features/Analytics/MetricVsTarget";
import { WebsitePerformance } from "../../features/Analytics/WebsitePerformance";
import { CardFooterInfo } from "../../features/CardFooterInfo";
import { LineBarAreaComposedChart } from "./../../features/ReCharts/LineBarAreaComposedChart";
import { TinyAreaChart } from "./../../features/ReCharts/TinyAreaChart";
import { SimpleLineChart } from "./../../features/ReCharts/SimpleLineChart";

import './../../styles/pages/dashboards/analytics.scss';

const LAYOUT = {
    'metric-v-target-users': { h: 6, md: 4 },
    'metric-v-target-sessions': { h: 6, md: 4 },
    'metric-v-target-pageviews': { h: 6, md: 4 },
    'analytics-audience-metrics': { h: 10, minH: 7 },
    'traffic-channels': { md: 6, h: 6 },
    'sessions': { md: 6, h: 6, maxH: 9, minW: 3 },
    'spend': { md: 6, h: 6 },
    'website-performance': { md: 6, h: 12 },
    'organic-traffic': { md: 6, h: 10 }
}

const SessionByDevice = (props) => (
    <div className='session'>
        <div className='session__title'>
            { props.title }
        </div>
        <div className='session__values'>
            <div className={`session__percentage text-${props.color}`}>
                { props.valuePercent }%
            </div>
            <div className={`session__value text-${props.color}`}>
                { props.value }
            </div>
        </div>
    </div>
);
SessionByDevice.propTypes = {
    title: PropTypes.node,
    color: PropTypes.string,
    valuePercent: PropTypes.string,
    value: PropTypes.string
}

class Analytics extends React.Component {
    state = {
        layouts: _.clone(LAYOUT)
    }

    _resetLayout = () => {
        this.setState({
            layouts: _.clone(LAYOUT)
        })
    }

    render() {
        const { layouts } = this.state;

        return (
            <React.Fragment>
                <Container fluid={ false }>
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
                                <Button color="primary" className="mb-2 mr-2">
                                    <i className="fa fa-check mr-2"></i>
                                    Apply
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button
                                    color="secondary"
                                    outline
                                    className="mb-2 align-self-start"
                                    onClick={this._resetLayout}
                                >
                                    <i className="fa fa-times"></i>
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Container>

                <Grid className="dashboard-analytics">
                    <Grid.Row
                        onLayoutChange={ layouts => this.setState({ layouts }) }
                        columnSizes={ this.state.layouts }
                        rowHeight={ 55 }
                    >
                        <Grid.Col { ...(applyColumn('metric-v-target-users', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Metric vs Target
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <div className="text-right mb-3">
                                        <MetricVsTarget 
                                            title="Users"
                                            value="168,793"
                                            progressbarColor="danger"
                                            targetValue="169,001"
                                        />
                                    </div>
                                    <div className="small">
                                        <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                                        How do your users (visitors) 
                                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('metric-v-target-sessions', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Metric vs Target
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <div className="text-right mb-3">
                                        <MetricVsTarget 
                                            title="Sessions"
                                            value="529,747"
                                            progressbarValue="67"
                                            progressbarColor="success"
                                            targetValue="782,957"
                                        />
                                    </div>
                                    <div className="small">
                                        <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                                        How do your users sessions (visits) 
                                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('metric-v-target-pageviews', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Metric vs Target
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <div className="text-right mb-3">
                                        <MetricVsTarget 
                                            title="Pageviews"
                                            value="1,763,981"
                                            progressbarValue="34"
                                            progressbarColor="success"
                                            targetValue="1,567,334"
                                        />
                                    </div>
                                    <div className="small">
                                        <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                                        How do your pageviews 
                                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('analytics-audience-metrics', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Analytics Audience Metrics
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
                                    <LineBarAreaComposedChart height="100%" className="flex-fill"/>
                                    <CardFooterInfo />
                                </CardBody>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('traffic-channels', layouts)) }>
                            <Card className="d-flex flex-column">
                                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Traffic Channels
                                </CardHeader>
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
                                <CardBody className="mt-auto flex-grow-0">                
                                    <div className="small">
                                        <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                                        How do your users (visitors), sessions (visits) and pageviews 
                                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('sessions', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Sessions by Device Type
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
                                    <div className='sessions'>
                                        <SessionByDevice 
                                            title="Desktop"
                                            color="primary"
                                            valuePercent="51,5"
                                            value="201,345"
                                        />
                                        <SessionByDevice 
                                            title="Mobile"
                                            color="info"
                                            valuePercent="34,4"
                                            value="134,201"
                                        />
                                        <SessionByDevice 
                                            title="Mobile"
                                            color="muted"
                                            valuePercent="20,8"
                                            value="81,525"
                                        />
                                    </div>
                                    <Progress multi className='sessions-progress'>
                                        <Progress bar value="25" />
                                        <Progress bar color="info" value="30" />
                                        <Progress bar color="secondary" value="45" />
                                    </Progress>
                                    <div className='sessions-info small mt-auto'>
                                        <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                                        How do your users (visitors), sessions (visits) and pageviews 
                                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('spend', layouts)) }>
                            <Card>
                                <CardHeader className="d-flex bb-0 pt-3 bg-none" tag="h6">
                                    <span>
                                        <i className="fa fa-ellipsis-v mr-2"></i> Spend
                                    </span>
                                    <span className="ml-auto text-right text-muted">
                                        Dec 22, 2016 to<br />
                                        Dec 31, 2016 (prev.)
                                    </span>
                                </CardHeader>
                                <CardBody>
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
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('website-performance', layouts)) }>
                            <Card>
                                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2"></i> Website Performance
                                </CardHeader>
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
                                <CardBody className="flex-grow-0 mt-auto">                
                                    <div className="small">
                                        <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                                        How do your users (visitors), sessions (visits) and pageviews 
                                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid.Col>
                        <Grid.Col { ...(applyColumn('organic-traffic', layouts)) }>
                            <Card>
                                <CardHeader className="d-flex bb-0 pt-3 bg-none">
                                    <Media>
                                        <Media left className="mr-3">
                                            <i className="fa fa-ellipsis-v"></i> 
                                        </Media>
                                        <Media body>
                                            <span className="h6">
                                                How did my organic traffic perform?
                                            </span>
                                            <br />
                                            <span className="text-muted">
                                                Dec 22, 2016 to Dec 31, 2016 (prev.)
                                            </span>
                                        </Media>
                                    </Media>
                                </CardHeader>
                                <CardBody className="d-flex flex-column">
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
                                    <SimpleLineChart height="100%" className="flex-fill"/>
                                    <div className="small pt-3">
                                        <i className="fa fa-fw fa-info-circle text-muted mr-2"></i>
                                        How do your users (visitors), sessions (visits) and pageviews 
                                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days?
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Analytics;
