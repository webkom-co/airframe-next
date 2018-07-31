import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Avatar,
    AvatarAddOn,
    Media,
    Button,
    ButtonGroup,
    ListGroup,
    ListGroupItem,
    Nav,
    NavItem, 
    NavLink,
    CustomInput,
    Badge,
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const TabsPills = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Pills Designs" 
                        subTitle={(
                            <React.Fragment>
                                Default, bordered, toolbar layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Default
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Fill & Justify
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p>
                                Easily make pills equal widths of their 
                                parent with <code>.nav-justified</code> class.
                            </p>
                            <Nav pills className="nav-justified">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Pills Variations" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Default, bordered, toolbar layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Center
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="d-flex justify-content-center">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Right
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p>
                                Basic pills example using <code>&lt;Nav pills&gt;</code> class. 
                                Also requires base <code>&lt;NavItem&gt;</code> and 
                                <code>&lt;NavLink&gt;</code> class.
                            </p>
                            <Nav pills className="d-flex justify-content-end">
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left Badges
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Waiting
                                        </Badge> 
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Doing
                                        </Badge> 
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <Badge color="secondary" className="align-self-center mr-2">
                                            Safe
                                        </Badge> 
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left & Right Badges
                                <span className="small ml-1 text-muted">
                                    #2.05
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active className="flex-sm-fill d-flex justify-content-between">
                                        <Badge color="secondary" className="align-self-center">
                                            2.562
                                        </Badge> 
                                        <span className="align-self-center">
                                            Profile
                                        </span>
                                        <Badge color="secondary" className="align-self-center">
                                            Done
                                        </Badge> 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="flex-sm-fill d-flex justify-content-between">
                                        <Badge color="secondary" className="align-self-center">
                                            2.300
                                        </Badge> 
                                        <span className="align-self-center">
                                            Settings
                                        </span>
                                        <Badge color="secondary" className="align-self-center">
                                            Ready
                                        </Badge> 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="flex-sm-fill d-flex justify-content-between" disabled>
                                        <Badge color="secondary" className="align-self-center">
                                            7.082
                                        </Badge> 
                                        <span className="align-self-center">
                                            Logout
                                        </span>
                                        <Badge color="secondary" className="align-self-center">
                                            Upload
                                        </Badge> 
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left Icon
                                <span className="small ml-1 text-muted">
                                    #2.06
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active>
                                        <i className="fa fa-fw fa-user mr-2"></i>
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <i className="fa fa-fw fa-gear mr-2"></i>
                                        Settings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>
                                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Right Icon
                                <span className="small ml-1 text-muted">
                                    #2.07
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" active className="d-flex">
                                        Profile
                                        <i className="fa fa-fw fa-user ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        Settings
                                        <i className="fa fa-fw fa-gear ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        Logout
                                        <i className="fa fa-fw fa-sign-out ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Left & Right Icons
                                <span className="small ml-1 text-muted">
                                    #2.08
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" active>
                                        <i className="fa fa-fw fa-user align-self-center mr-2"></i>
                                        Profile
                                        <i className="fa fa-fw fa-angle-right ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        <i className="fa fa-fw fa-gear align-self-center mr-2"></i>
                                        Settings
                                        <i className="fa fa-fw fa-angle-right ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        <i className="fa fa-fw fa-sign-out  align-self-center mr-2"></i>
                                        Logout
                                        <i className="fa fa-fw fa-angle-right ml-auto align-self-center"></i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Right Pills
                                <span className="small ml-1 text-muted">
                                    #2.09
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" active>
                                        Profile
                                        <Badge color="secondary" pill className="ml-auto align-self-center">3</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        Settings
                                        <Badge color="secondary" pill className="ml-auto align-self-center">15</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        Logout
                                        <Badge color="secondary" pill className="ml-auto align-self-center">986</Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Pills: Columns Right Badges
                                <span className="small ml-1 text-muted">
                                    #2.10
                                </span>
                            </CardTitle>
                            <p>
                                Pills are also vertically stackable. 
                                Just add <code>vertical</code> to the <code>Nav</code>.
                            </p>
                            <Nav pills vertical>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" active>
                                        Profile
                                        <Badge color="secondary" className="ml-auto align-self-center">
                                            Added
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex">
                                        Settings
                                        <Badge color="secondary" className="ml-auto align-self-center">
                                            Query
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="d-flex" disabled>
                                        Logout
                                        <Badge color="secondary" className="ml-auto align-self-center">
                                            Done
                                        </Badge>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardBody>
                    </Card>

                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 1 */}

        </Container>
    </React.Fragment>
);

export default TabsPills;