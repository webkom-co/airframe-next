import React from 'react';
import faker from 'faker';

import { 
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    Table,
    Button,
    Card,
    CardTitle,
    AvatarAddOn,
    CardBody,
    CardText,
    CardFooter,
    CardColumns,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media,
    Input,
    InputGroup,
    CustomInput,
    InputGroupAddon,
    Badge,
    Avatar,
    UncontrolledTooltip
} from './../../components';

import {
    ProjectsSmHeader
} from "../components/ProjectsSmHeader";

import {
    TasksCardGrid
} from "../components/TasksCardGrid";


const TasksDetails = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 3 }>
                    { /* START Left Nav  */}
                    <div className="mb-5">
                        <div className="small mb-3">
                            Task Details
                        </div>
                        <Table size="sm">
                            <tbody>
                                <tr>
                                    <td className="align-middle">Project</td>
                                    <td className="text-right">
                                        <a href="#">Analytics Redo</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Assigned by</td>
                                    <td className="text-right">
                                        <a href="#">
                                            { faker.name.firstName() } { faker.name.lastName() }
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Start Date</td>
                                    <td className="text-right">
                                        Thu 12 May 2016
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">End Date</td>
                                    <td className="text-right">
                                        Wed 18 May 2016
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Priority</td>
                                    <td className="text-right">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle color="link" caret className="p-0">
                                                <i className="fa fa-circle text-success mr-2"></i>
                                                Small 
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem header>Select Priority</DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-circle text-danger mr-2"></i>
                                                    Big 
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-circle text-warning mr-2"></i>
                                                    High 
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-circle text-primary mr-2"></i>
                                                    Normal 
                                                </DropdownItem>
                                                <DropdownItem active>
                                                    <i className="fa fa-circle text-success mr-2"></i>
                                                    Small 
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Progress</td>
                                    <td className="align-middle text-right">
                                        30%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Task ID</td>
                                    <td className="align-middle text-right">
                                        # 6726746
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Date Assigned</td>
                                    <td className="align-middle text-right">
                                        Wed, 16 Dec 2015, 12:17 PM
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    { /* END Left Nav  */}
                    { /* START Left Nav  */}
                    <div className="mb-4">
                        <div className="small mb-3">
                            Assigned to
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
                    <ProjectsSmHeader />
                    { /* START Right Content */}
                    <Card>
                        <CardBody>
                            <Media>
                                <Media left href="#">
                                    <CustomInput type="checkbox" id="checkboxTaskDetails" label="" inline />
                                </Media>
                                <Media body>
                                    <div className="mb-3">
                                        <h5>
                                            <span className="mr-2">
                                                #{ faker.random.number() }
                                            </span>
                                            { faker.hacker.phrase() }
                                        </h5>
                                        <Badge pill color="primary" className="mr-1">
                                            { faker.commerce.department() }
                                        </Badge>
                                        <Badge pill color="secondary" className="mr-1">
                                            { faker.commerce.department() }
                                        </Badge>
                                        <Badge pill color="secondary" className="mr-1">
                                            { faker.commerce.department() }
                                        </Badge>
                                    </div>
                                </Media>
                            </Media>
                            <p className="lead">
                                Animi ea magni voluptates accusamus laboriosam. Unde repellat hic id et aliquam ut qui dignissimos.
                            </p>
                            <p className="mb-4">
                                { faker.lorem.paragraphs() }
                            </p>
                            { /* START Atachemnts */}
                            <div className="mb-4">
                                <div className="mb-3">
                                    <span className="small mr-3">
                                        Attachments
                                    </span>
                                    <Badge pill color="secondary">
                                        3
                                    </Badge>
                                </div>
                                { /* START Atachemnt Media */}
                                <Media className="mb-2">
                                    <Media left className="mr-2">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-square fa-stack-2x text-primary"></i>
                                            <i className="fa fa-file-word-o fa-stack-1x text-white"></i>
                                        </span>
                                    </Media>
                                    <Media body>
                                        <div className="text-inverse">
                                            { faker.system.fileName() }
                                        </div>
                                        <span>
                                            by <span>
                                                { faker.name.firstName() } { faker.name.firstName() }
                                            </span> 
                                            <span className="text-muted"> · </span> 
                                            <span>
                                                { faker.finance.amount() } Kb
                                            </span>
                                        </span>
                                    </Media>
                                    <Media right className="d-flex">
                                        <div className="text-right mr-3">
                                            04-Oct-2012<br />
                                            05:20 PM
                                        </div>
                                        <Button color="secondary" outline className="align-self-center">
                                            <i className="fa fa-fw fa-download"></i>
                                        </Button>
                                    </Media>
                                </Media>
                                { /* END Atachemnt Media */}
                                <a href="#" className="my-3">
                                    <i className="fa fa-plus mr-2"></i>
                                    Add More Files to this Task
                                </a>
                            </div>
                            { /* END Atachemnts */}
                            <div className="mb-3">
                                <span className="small mr-3">
                                    Comments
                                </span>
                                <Badge pill color="secondary">
                                    3
                                </Badge>
                            </div>
                            { /* START Comment Media */}
                            <Media className="mb-2">
                                <Media left className="mr-3">
                                    <Avatar.Image
                                        size="md"
                                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                                        className="mr-2"
                                        addOns={[
                                            <AvatarAddOn.Icon 
                                                className="fa fa-circle"
                                                color="white"
                                                key="avatar-icon-bg"
                                            />,
                                            <AvatarAddOn.Icon 
                                                className="fa fa-circle"
                                                color="success"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    />
                                </Media>
                                <Media body>
                                    <div className="mb-2">
                                        <span className="text-inverse mr-2">
                                            { faker.name.firstName() } { faker.name.firstName() }
                                        </span>
                                        <span className="small">
                                            13-Jun-2015, 08:13
                                        </span>
                                    </div>
                                    <p className="mb-1">
                                        { faker.lorem.paragraph() }
                                    </p>
                                    <div>
                                        <span className="text-success mr-2">
                                            +92
                                        </span>
                                        <a href="#" id="tooltipVoteUp" className="mr-2">
                                            <i className="fa fa-angle-up text-success"></i>
                                        </a>
                                        <UncontrolledTooltip placement="top" target="tooltipVoteUp">
                                            Vote Up
                                        </UncontrolledTooltip>
                                        <a href="#" id="tooltipVoteDown" className="mr-2">
                                            <i className="fa fa-angle-down text-danger"></i>
                                        </a>
                                        <UncontrolledTooltip placement="down" target="tooltipVoteDown">
                                            Vote Down
                                        </UncontrolledTooltip>
                                        <span className="mr-2">·</span>
                                        <a href="#" className="mr-2">
                                            Reply
                                        </a>
                                        <span className="mr-2">·</span>
                                        <a href="#">
                                            Edit
                                        </a>
                                    </div>
                                </Media>
                            </Media>
                            { /* END Comment Media */}
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
                    { /* END Right Content */}
                </Col>
            </Row>
            { /* END Header 1 */}

        </Container>
    </React.Fragment>
);

export default TasksDetails;