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
    ButtonToolbar,
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    CustomInput,
    Table,
    TabPane,
    Badge,
    Nav,
    NavItem,
    Pagination,
    PaginationLink,
    PaginationItem,
    UncontrolledTooltip,
    UncontrolledTabs
} from './../../../components';
import { randomAvatar } from '../../../utilities';

import { Profile } from "../../components/Profile";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";

const Clients = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 8 }>
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="clients">
                            <CardBody>
                                <div className="d-flex">
                                    <Nav pills>
                                        <NavItem>
                                            <UncontrolledTabs.NavLink tabId="clients">
                                                Clients
                                            </UncontrolledTabs.NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <UncontrolledTabs.NavLink tabId="companies">
                                                Companies
                                            </UncontrolledTabs.NavLink>
                                        </NavItem>
                                    </Nav>
                                    <ButtonToolbar className="ml-auto">
                                        <ButtonGroup>
                                            <Button color="secondary" outline className="align-self-center mr-2" id="tooltipSettings">
                                                <i className="fa fa-fw fa-gear"></i>
                                            </Button>
                                        </ButtonGroup>
                                        <ButtonGroup>
                                            <Button color="secondary" className="align-self-center" id="tooltipAddNew">
                                                <i className="fa fa-fw fa-plus"></i>
                                            </Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                    <UncontrolledTooltip placement="right" target="tooltipAddNew">
                                        Add New
                                    </UncontrolledTooltip>
                                    <UncontrolledTooltip placement="right" target="tooltipSettings">
                                        Settings
                                    </UncontrolledTooltip>
                                </div>
                            </CardBody>

                            <UncontrolledTabs.TabContent>
                                <TabPane tabId="clients">
                                    { /* START Table */}
                                    <Table className="mb-0" hover responsive>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th className="text-right">Phone</th>
                                                <th className="text-right">Label</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { /* START TR */}
                                            <tr>
                                                <td className="align-middle">
                                                    <CustomInput type="checkbox" id="clientCheckbox" label="" inline />
                                                </td>
                                                <td className="align-middle">
                                                    <a href="#" id="tooltipAddToFavorites">
                                                        <i className="fa fa-fw fa-star-o"></i>
                                                    </a>
                                                    <UncontrolledTooltip placement="top" target="tooltipAddToFavorites">
                                                        Add To Favorites
                                                    </UncontrolledTooltip>
                                                </td>
                                                <td className="align-middle">
                                                    <Media>
                                                        <Media left className="align-self-center mr-3">
                                                            <Avatar.Image
                                                                size="md"
                                                                src={ randomAvatar() }
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
                                                                { faker.name.jobTitle() }
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td className="align-middle">
                                                    { faker.internet.email() }
                                                </td>
                                                <td className="align-middle">
                                                    { faker.phone.phoneNumberFormat() }
                                                </td>
                                                <td className="align-middle text-right">
                                                    <Badge pill color="primary" outline>
                                                        { faker.commerce.department() }
                                                    </Badge>
                                                </td>
                                            </tr>
                                        { /* END TR */}
                                        </tbody>
                                    </Table>
                                    { /* END Table */}
                                </TabPane>
                                <TabPane tabId="companies">
                                    { /* START Table */}
                                    <Table className="mb-0" hover responsive>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th className="text-right">Phone</th>
                                                <th className="text-right">Label</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { /* START TR */}
                                            <tr>
                                                <td className="align-middle">
                                                    <CustomInput type="checkbox" id="companyCheckbox" label="" inline />
                                                </td>
                                                <td className="align-middle">
                                                    <a href="#" id="tooltipAddToFavorites">
                                                        <i className="fa fa-fw fa-star-o"></i>
                                                    </a>
                                                    <UncontrolledTooltip placement="top" target="tooltipAddToFavorites">
                                                        Add To Favorites
                                                    </UncontrolledTooltip>
                                                </td>
                                                <td className="align-middle">
                                                    <Media>
                                                        <Media left className="align-self-center mr-2">
                                                            <Avatar.Font 
                                                                bgColor="secondary"
                                                                fgColor="white"
                                                                className="mr-1"
                                                                >
                                                                <i className="fa fa-facebook" />
                                                            </Avatar.Font>
                                                        </Media>
                                                        <Media body>
                                                            <div className="mt-0 d-flex">
                                                                Facebook
                                                            </div>
                                                            <span>
                                                                { faker.address.country() }
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td className="align-middle">
                                                    <Avatar.Image
                                                        size="sm"
                                                        src={ randomAvatar() }
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
                                                    <Avatar.Image
                                                        size="sm"
                                                        src={ randomAvatar() }
                                                        className="mr-2"
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
                                                    <Avatar.Image
                                                        size="sm"
                                                        src={ randomAvatar() }
                                                        className="mr-2"
                                                        addOns={[
                                                            <AvatarAddOn.Icon 
                                                                className="fa fa-circle"
                                                                color="white"
                                                                key="avatar-icon-bg"
                                                            />,
                                                            <AvatarAddOn.Icon 
                                                                className="fa fa-circle"
                                                                color="warning"
                                                                key="avatar-icon-fg"
                                                            />
                                                        ]}
                                                    />
                                                </td>
                                                <td className="align-middle text-right">
                                                    { faker.phone.phoneNumberFormat() }<br />
                                                    { faker.internet.email() } 
                                                </td>
                                                <td className="align-middle text-right">
                                                    { faker.address.streetAddress() }<br />
                                                    { faker.address.city() } 
                                                </td>
                                            </tr>
                                        { /* END TR */}
                                        </tbody>
                                    </Table>
                                    { /* END Table */}
                                </TabPane>
                            </UncontrolledTabs.TabContent>
                        </UncontrolledTabs>

                        <CardFooter className="d-flex">
                            <span className="align-self-center">
                                Showing 1 to 10 of 57 entries
                            </span>
                            <Pagination aria-label="Page navigation example" className="ml-auto">
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
                                    <Button color="primary" block>
                                        Message
                                    </Button> 
                                </Col>
                                <Col sm={ 6 }>
                                    <Button color="secondary" outline block>
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
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default Clients;