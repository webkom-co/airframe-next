import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    Progress,
    ListGroup,
    ListGroupItem,
    Media,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

import {
    TasksMedia
} from "../../components/ProjectsDashboards/TasksMedia";
import {
    ProjectsList
} from "../../components/ProjectsDashboards/ProjectsList";
import {
    TinyDonutChart
} from "../../components/ProjectsDashboards/TinyDonutChart"
import {
    TimelineMini
} from "../../components/Timeline/TimelineMini"

const Monitor = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Monitor"
                    className="mb-4 mb-lg-5"
                />

            </Col>
        </Row>
        <Row>
            <Col lg={ 4 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            System Monitoring
                        </CardTitle>
                        <div className="mb-4">
                            <div>
                                <h6 className="mb-1">CPU</h6>
                                <p>Intel Celeron G1610 @2.60Ghz</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="d-flex align-items-center mr-2">Core 0</span>
                                <Progress value="44" className="mt-2 w-50" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">86%</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="d-flex align-items-center mr-2">Core 1</span>
                                <Progress value="74" className="mt-2 w-50" style={{height: "5px"}} />
                                <span className="ml-2 text-inverse">40%</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div>
                                <h6 className="mb-1">Memory <small>(Ram)</small></h6>
                                <p>GSkill 2 x 8 GB DDR3 @1333 Mhz</p>
                            </div>
                            <div className="mb-3">
                                <h2 className="mb-0">52 <small>GB</small></h2>
                                <span>Total Memory</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Allocated
                                    </div>
                                    <h6 className="mb-0">48,775 MB</h6>
                                    <span>79%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> In Cache
                                    </div>
                                    <h6 className="mb-0">26,938 MB</h6>
                                    <span>65%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-muted"></i> Available
                                    </div>
                                    <h6 className="mb-0">2,775 MB</h6>
                                    <span>34%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mb-1">Interface Traffic <small>(re0)</small></h6>
                                <p>Intel Celeron G1610 @2.60Ghz</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Network Monitoring
                        </CardTitle>
                        <div>
                            <div>
                                <h6 className="mb-1">Interface Traffic <small>(re0)</small></h6>
                                <p>Intel Celeron G1610 @2.60Ghz</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                           Hardware Temperature
                        </CardTitle>
                        <div>
                            <div>
                                <h6 className="mb-1">CPU <small>(idle)</small></h6>
                                <p>Intel Celeron G1610 @2.60Ghz</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <i className="fa fa-caret-down fa-fw text-danger"></i>Min: 19ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 26ºC
                                </div>
                                <div className="text-left">
                                    <i className="fa fa-caret-up fa-fw text-success"></i>Min: 32ºC
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 8 }>
                <p>
                    Nesciunt odit eius nihil molestiae tenetur earum enim quidem. Aperiam non sapiente voluptatum in doloremque rerum magnam quae sed. 
                    Quisquam eos non voluptate sapiente qui temporibus harum in illo. Aliquid at dolor labore. Qui error modi.
                </p>
                <div className="hr-text hr-text-left mt-2 mb-4">
                    <span>Volume Status</span>
                </div>
                <Row className="mb-5">
                    <Col lg={ 4 }>
                        <div>
                            <div className="mb-3">
                                <h6 className="mb-1">Path</h6>
                                <Badge color="secondary" pill>/mtn/volume1</Badge>
                            </div>
                            <div className="mb-3">
                                <h2 className="mb-0">52% <small>GB</small></h2>
                                <span>Volume Size</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Used Space
                                    </div>
                                    <h6 className="mb-0">48,775 MB</h6>
                                    <span>79%</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-muted"></i> Free Space
                                    </div>
                                    <h6 className="mb-0">26,938 MB</h6>
                                    <span>65%</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="hr-text hr-text-left mt-2 mb-4">
                    <span>Mounted Devices</span>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th className="bt-0">Description</th>
                            <th className="bt-0">RAID</th>
                            <th className="bt-0">Capacity</th>
                            <th className="bt-0 text-right">Usage</th>
                            <th className="bt-0 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle">
                                <span className="text-inverse">HDD1</span> <span className="small">(ada0)</span>
                            </td>
                            <td className="align-middle">
                                Mirror <Badge color="secondary" pill className="ml-2">/mtn/volume1</Badge>
                            </td>
                            <td className="align-middle">
                                <Progress value="44" style={{height: "5px"}} />
                            </td>
                            <td>
                                <span className="text-inverse">7.3.5 TiB</span> / 9.3.1 TiB
                            </td>
                            <td className="text-right">
                                Healthly <i className="fa fa-fw fa-check-circle text-success"></i>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Monitor'
})(Monitor);