import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { 
    Container,
    Row,
    Col,
    Media,
    Avatar,
    AvatarAddOn,
    Card,
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    CustomInput,
    Table,
    Badge,
    InputGroup,
    InputGroupAddon,
    Input,
    UncontrolledTooltip
} from './../../../components';

import { MailboxLeftNav } from "../../components/Mailbox/MailboxLeftNav";
import { Paginations } from "../../components/Paginations";
import { TrTableInbox } from "./components/TrTableInbox";

const Inbox = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <MailboxLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-lg-flex justify-content-end">
                                <div className="mr-auto d-flex align-items-center">
                                    <InputGroup>
                                        <Input placeholder="Search for..." />
                                        <InputGroupAddon addonType="append">
                                            <Button color="secondary" outline>
                                                <i className="fa fa-search"></i>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <ButtonGroup className="mr-2">
                                    <Button color="secondary" outline className="align-self-center" id="tooltipRefresh">
                                        <i className="fa fa-fw fa-refresh"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipRefresh">
                                        Refresh
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline className="align-self-center" id="tooltipFav">
                                        <i className="fa fa-fw fa-star"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipFav">
                                        Add to Favorites
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline className="align-self-center" id="tooltipTag">
                                        <i className="fa fa-fw fa-tag"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipTag">
                                        Tag
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline className="align-self-center" id="tooltipBan">
                                        <i className="fa fa-fw fa-ban"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipBan">
                                        Ban this User
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline id="tooltipDelete">
                                        <i className="fa fa-fw fa-trash"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipDelete">
                                        Delete
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button color="primary" className="align-self-center" tag={ Link } to="/apps/new-email" id="tooltipAddNew">
                                        <i className="fa fa-fw fa-pencil"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                                        Add New
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                            </div>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>From</th>
                                    <th>Subject</th>
                                    <th></th>
                                    <th></th>
                                    <th className="text-right">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                _.times(11, (index) => (
                                    <TrTableInbox 
                                        id={index}
                                        key={index}
                                    />            
                                    ))
                                }
                            </tbody>
                        </Table>
                        { /* END Table */}
                        <CardFooter className="d-flex justify-content-center pb-0">
                            <Paginations />
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default Inbox;