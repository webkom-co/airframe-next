import React from 'react';
import faker from 'faker';

import { 
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    Input,
    InputGroupAddon,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Media,
    Avatar,
    Progress,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
    Pagination,
    PaginationItem,
    PaginationLink,
    AvatarAddOn,
    Card,
    CardTitle,
    CardBody,
    CardText,
    CardFooter,
    Table,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const ProjectsList = () => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    { /* START Left Nav  */}
                    <div className="mb-4">
                        <div className="small mb-3">
                            Search
                        </div>
                        <InputGroup>
                            <Input placeholder="Search for..." />
                            <InputGroupAddon addonType="append">
                                <Button outline color="secondary">Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    { /* END Left Nav  */}
                    { /* START Left Nav  */}
                    <div className="mb-4">
                        <div className="small mb-3">
                            Favorites
                        </div>
                        <Nav pills vertical>
                            <NavItem>
                                <NavLink href="#" active>
                                    <i className="fa fa-fw fa-line-chart mr-2"></i>
                                    Overview
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <i className="fa fa-fw fa-calendar-o mr-2"></i>
                                    Calendar
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    { /* END Left Nav  */}
                    { /* START Left Nav  */}
                    <div className="mb-4">
                        <div className="small mb-3">
                            Projects
                        </div>
                        <Nav pills vertical>
                            <NavItem>
                                <NavLink href="#" className="d-flex">
                                    <i className="fa fa-fw fa-star-o align-self-center mr-2"></i>
                                    Analytics Redesign
                                    <Badge color="secondary" pill className="ml-auto align-self-center">
                                        12
                                    </Badge>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className="d-flex">
                                    <i className="fa fa-fw fa-star-o align-self-center mr-2"></i>
                                    New Website
                                    <Badge color="secondary" pill className="ml-auto align-self-center">
                                        4
                                    </Badge>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className="d-flex">
                                    <i className="fa fa-fw fa-star-o align-self-center mr-2"></i>
                                    Chart for Newsletter
                                    <Badge color="secondary" pill className="ml-auto align-self-center">
                                        9
                                    </Badge>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <i className="fa fa-fw fa-plus mr-2"></i>
                                    Add New Project
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    { /* END Left Nav  */}
                    { /* START Left Nav  */}
                    <div className="mb-4">
                        <div className="small mb-3">
                            People
                        </div>
                        <Nav pills vertical>
                            <NavItem>
                                <NavLink href="#" className="d-flex">
                                    <Media>
                                        <Media left middle className="mr-3 align-self-center">
                                            <Avatar.Image
                                                size="md"
                                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                            />
                                        </Media>
                                        <Media body>
                                            <div className="mt-0">
                                                { faker.name.firstName() } { faker.name.lastName() }
                                            </div>
                                            <span className="small">
                                                { faker.address.state() }, { faker.address.stateAbbr() }
                                            </span>
                                        </Media>
                                    </Media>
                                    <i className="fa fa-fw fa-circle text-success ml-auto align-self-center ml-2"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className="d-flex">
                                    <Media>
                                        <Media left middle className="mr-3 align-self-center">
                                            <Avatar.Image
                                                size="md"
                                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                            />
                                        </Media>
                                        <Media body>
                                            <div className="mt-0">
                                                { faker.name.firstName() } { faker.name.lastName() }
                                            </div>
                                            <span className="small">
                                                { faker.address.state() }, { faker.address.stateAbbr() }
                                            </span>
                                        </Media>
                                    </Media>
                                    <i className="fa fa-fw fa-circle text-warning ml-auto align-self-center ml-2"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className="d-flex">
                                    <Media>
                                        <Media left middle className="mr-3 align-self-center">
                                            <Avatar.Image
                                                size="md"
                                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                            />
                                        </Media>
                                        <Media body>
                                            <div className="mt-0">
                                                { faker.name.firstName() } { faker.name.lastName() }
                                            </div>
                                            <span className="small">
                                                { faker.address.state() }, { faker.address.stateAbbr() }
                                            </span>
                                        </Media>
                                    </Media>
                                    <i className="fa fa-fw fa-circle text-danger ml-auto align-self-center ml-2"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <i className="fa fa-fw fa-plus mr-2"></i>
                                    Add New People
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    { /* END Left Nav  */}
                </Col>
                <Col lg={ 9 }>
                    { /* START Header Nav */}
                    <div className="d-flex justify-content-end">
                        <Breadcrumb className="mr-auto d-flex align-items-center">
                            <BreadcrumbItem active>
                                Home
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <ButtonGroup className="p-2">
                            <Button color="secondary" outline className="align-self-center">
                                <i className="fa-fw fa fa-bars"></i>
                            </Button>
                            <Button color="secondary" outline className="align-self-center">
                                <i className="fa-fw fa fa-th-large"></i>
                            </Button>
                        </ButtonGroup>
                        <Button color="secondary" className="align-self-center">
                            <i className="fa-fw fa fa-plus"></i>
                        </Button>
                    </div>
                    { /* END Header Nav */}

                    <Card className="mb-3">
                        { /* START Table */}
                        <Table className="mb-0" hover>
                            <thead>
                                <tr>
                                    <th className="align-middle bt-0">Star</th>
                                    <th className="align-middle bt-0">Project</th>
                                    <th className="align-middle bt-0">Status</th>
                                    <th className="align-middle bt-0">Tasks Completed</th>
                                    <th className="align-middle bt-0">People</th>
                                    <th className="align-middle bt-0 text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        <div className="text-inverse">
                                            <a href="#">
                                                <i className="fa fa-fw fa-star-o"></i>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="align-middle">
                                        <div>
                                            <a href="#">
                                                { faker.company.catchPhrase() }
                                            </a>
                                        </div>
                                        <span>
                                            Last Edited by: { faker.name.firstName() } { faker.name.lastName() } <br />
                                            { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        <Badge pill color="success">
                                            Success
                                        </Badge>
                                    </td>
                                    <td className="align-middle">
                                        <Progress value={2 * 5} style={{height: "5px"}} className="mb-2" />
                                        <div>
                                            Tasks Completed: 
                                            <span className="text-inverse">
                                                36/94
                                            </span>
                                        </div>
                                    </td>
                                    <td className="align-middle">
                                        <Avatar.Image
                                            size="md"
                                            src="http://bs4.webkom.co/img/avatars/2.jpg"
                                        />
                                    </td>
                                    <td className="align-middle text-right">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle color="secondary" outline caret>
                                                <i className="fa fa-gear"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-folder-open mr-2"></i>
                                                    View
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-ticket mr-2"></i>
                                                    Add Task
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-paperclip mr-2"></i>
                                                    Add Files
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-trash mr-2"></i>
                                                    Delete
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                        <CardFooter className="d-flex justify-content-center">
                            <Pagination aria-label="Page navigation example">
                                <PaginationItem>
                                    <PaginationLink previous href="#">
                                        <i className="fa fa-fw fa-angle-left"></i>
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#">
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#">
                                        <i className="fa fa-fw fa-angle-right"></i>
                                    </PaginationLink>
                                </PaginationItem>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default ProjectsList;