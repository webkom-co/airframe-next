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
    CardTitle,
    CardBody,
    Progress,
    Table,
    Badge,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledTooltip
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const Tables = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Basic Tables" 
                        subTitle={(
                            <React.Fragment>
                                All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Default
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Using the most basic table markup, here’s how <code>.table-based</code> tables look in Bootstrap. 
                                All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the 
                                same manner as the parent.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Deadline</th>
                                    <th>Leader</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                    <th className="text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        <div className="text-inverse">
                                            { faker.name.firstName() } { faker.name.lastName() }
                                        </div>
                                        <span>
                                            { faker.company.companyName() }
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        <div>
                                            Thursday
                                        </div>
                                        <span className="text-danger">
                                            Overdue
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        <Media>
                                            <Media left middle className="mr-3">
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
                                                    { faker.name.jobTitle() }
                                                </span>
                                            </Media>
                                        </Media>
                                    </td>
                                    <td className="align-middle">
                                        <div>
                                            { faker.finance.amount() }
                                        </div>
                                        <span>
                                            Paid
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        <i className="fa fa-circle-o text-success mr-2"></i>
                                        { faker.finance.transactionType() }
                                    </td>
                                    <td className="align-middle text-right">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle color="secondary" outline caret>
                                                <i className="fa fa-gear"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-envelope mr-2"></i>
                                                    Send Email
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-phone mr-2"></i>
                                                    Call
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-user mr-2"></i>
                                                    Profile
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Section 2 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Responsive
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Responsive tables allow tables to be scrolled horizontally with ease. 
                                Make any table responsive across all viewports by wrapping a <code>Table</code> with <code>responsive</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Browser & OS</th>
                                    <th>IP</th>
                                    <th>Location</th>
                                    <th>Signed In</th>
                                    <th className="text-right">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        <i className="fa fa -fw fa-circle text-danger"></i>
                                    </td>
                                    <td className="align-middle">
                                        <Media>
                                            <Media left middle className="mr-3">
                                                <i className="fa fa-fw fa-desktop fa-lg"></i>
                                            </Media>
                                            <Media body>
                                                <div className="mt-0 d-flex">
                                                    <span className="text-inverse">
                                                        Safari
                                                    </span> / 
                                                    { faker.system.semver() }
                                                </div>
                                                <span>
                                                    macOs { faker.system.semver() }
                                                </span>
                                            </Media>
                                        </Media>
                                    </td>
                                    <td className="align-middle">
                                        <div>
                                            <samp>
                                                { faker.internet.ip() }
                                            </samp>
                                        </div>
                                        <span>
                                            -
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        <div>
                                            { faker.address.city() }
                                        </div>
                                        <span>
                                            { faker.address.state() }, { faker.address.country() }
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018<br />
                                        12:34 PM
                                    </td>
                                    <td className="align-middle text-right">
                                        <a href="#" id="UncontrolledTooltipRevoke">
                                            <i className="fa fa-fw fa-close text-danger"></i>
                                        </a>
                                        <UncontrolledTooltip placement="left" target="UncontrolledTooltipRevoke">
                                            Revoke
                                        </UncontrolledTooltip>
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Section 3 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Striped
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Use <code>striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Last Refresh</th>
                                    <th className="text-right">
                                        Last Month
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        1
                                    </td>
                                    <td className="align-middle">
                                        <span className="text-inverse">
                                            { faker.commerce.productName() }
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                                    </td>
                                    <td className="align-middle text-right text-danger">
                                        <i className="fa fa-fw fa-caret-down mr-2"></i>
                                        92.02%
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Section 4 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Hoverable
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Use <code>hover</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th className="text-right">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        <a href="#">
                                            Invoice #{ faker.finance.mask() }
                                        </a>
                                    </td>
                                    <td className="align-middle">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </td>
                                    <td className="align-middle">
                                        $ { faker.finance.amount() }
                                    </td>
                                    <td className="align-middle text-right">
                                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 4 */}

            { /* START Section 5 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Small
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Add <code>size="sm"</code> to make tables more compact by cutting cell padding in half.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th className="text-right">
                                        Payment
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        #{ faker.finance.mask() }
                                    </td>
                                    <td className="align-middle">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </td>
                                    <td className="align-middle">
                                        $ { faker.finance.amount() }
                                    </td>
                                    <td className="align-middle text-right">
                                        <Badge pill color="primary">
                                            { faker.finance.transactionType() }
                                        </Badge>
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 5 */}

            { /* START Section 6 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Borderless
                                <span className="small ml-1 text-muted">
                                    #6.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Add <code>borderless</code> for a table without borders.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Payment Method</th>
                                    <th className="text-right">
                                        Receipt
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        <i className="fa fa-fw fa-check text-success"></i>
                                    </td>
                                    <td className="align-middle">
                                        <samp>{ faker.random.number() }</samp>
                                    </td>
                                    <td className="align-middle">
                                        { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                                    </td>
                                    <td className="align-middle">
                                        $ { faker.finance.amount() }
                                    </td>
                                    <td className="align-middle">
                                        <Badge color="primary">
                                            Premium
                                        </Badge>
                                    </td>
                                    <td className="align-middle">
                                        <i className="fa fa-fw fa-paypal text-primary mr-2"></i>
                                        { faker.internet.email() }
                                    </td>
                                    <td className="align-middle text-right">
                                        <a href="#" id="UncontrolledTooltipDownload">
                                            <i className="fa fa-fw fa-download text-primary"></i>
                                        </a>
                                        <UncontrolledTooltip placement="left" target="UncontrolledTooltipDownload">
                                            Download
                                        </UncontrolledTooltip>
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 6 */}

            { /* START Section 7 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Bordered
                                <span className="small ml-1 text-muted">
                                    #7.01
                                </span>
                            </CardTitle>
                            <p>
                                Add <code>bordered</code> for borders on all sides of the table and cells.
                            </p>
                            { /* START Table */}
                            <Table className="mb-0" bordered>
                                <thead>
                                    <tr>
                                        <th>Ticket</th>
                                        <th>Completion</th>
                                        <th>Create</th>
                                        <th>Deadline</th>
                                        <th className="text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { /* START TR */}
                                    <tr>
                                        <td className="align-middle">
                                            <span className="text-inverse">
                                                { faker.company.catchPhrase() }
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            <Progress value={50} style={{height: "5px"}} />
                                        </td>
                                        <td className="align-middle">
                                            { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                                        </td>
                                        <td className="align-middle">
                                            { faker.date.weekday() }, 12 { faker.date.month() }, 2018
                                        </td>
                                        <td className="align-middle text-right">
                                            <ButtonGroup>
                                                <Button color="secondary" outline>
                                                    <i className="fa fa-clone"></i>
                                                </Button>
                                                <Button color="secondary" outline>
                                                    <i className="fa fa-close"></i>
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                { /* END TR */}
                                </tbody>
                            </Table>
                            { /* END Table */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 7 */}
        </Container>
    </React.Fragment>
);

export default Tables;