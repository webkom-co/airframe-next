import React from 'react';
import faker from 'faker';

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
} from './../../components';

import {
    MailboxLeftNav
} from "../components/Mailbox/MailboxLeftNav";

import {
    Paginations
} from "../components/Paginations";

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
                                    <Button color="secondary" className="align-self-center" href="/newemail" id="tooltipAddNew">
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
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        <i className="fa fa-circle fa-fw text-primary" id="tooltipNewMessage"></i>
                                        <UncontrolledTooltip placement="bottom" target="tooltipNewMessage">
                                            New Message
                                        </UncontrolledTooltip>
                                    </td>
                                    <td className="align-middle">
                                        <CustomInput type="checkbox" id="mailboxCheckbox" label="" inline />
                                    </td>
                                    <td className="align-middle">
                                        <Media>
                                            <Media left className="d-flex align-self-center mr-3">
                                                <div className="mr-2">
                                                    <a href="#" id="tooltipAddToFavorites">
                                                        <i className="fa fa-fw fa-star-o"></i>
                                                    </a>
                                                    <UncontrolledTooltip placement="top" target="tooltipAddToFavorites">
                                                        Add To Favorites
                                                    </UncontrolledTooltip>
                                                </div>
                                                <Avatar.Image
                                                    size="md"
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
                                        { faker.lorem.sentence() }
                                    </td>
                                    <td className="align-middle">
                                        <Badge pill color="primary" outline>
                                            { faker.commerce.department() }
                                        </Badge>
                                    </td>
                                    <td className="align-middle">
                                        <i className="fa fa-paperclip"></i>
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
                            <span className="align-self-center">
                                Showing 1 to 10 of 57 entries
                            </span>
                            <span className="ml-auto">
                                <Paginations />
                            </span>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default Inbox;