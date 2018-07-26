import React from 'react';
import faker from 'faker';

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
    CustomInput,
    Badge,
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const MediaObjects = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Media Options" 
                        subTitle={(
                            <React.Fragment>
                                Media list and media object layouts
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
                            <CardTitle tag="h6" className="mb-4">
                                Media: Default
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="warning"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="success"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Link 
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        <a href="javascript:;">
                                            { faker.name.firstName() } { faker.name.lastName() }
                                        </a>
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        <a href="javascript:;">
                                            { faker.name.firstName() } { faker.name.lastName() }
                                        </a>
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        <a href="javascript:;">
                                            { faker.name.firstName() } { faker.name.lastName() }
                                        </a>
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Right Badge 
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right middle>
                                    <Badge color="secondary">Offline</Badge>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right middle>
                                    <Badge color="danger">Busy</Badge>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="success"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right middle>
                                    <Badge color="success">Online</Badge>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Right Checkbox
                                <span className="small ml-1 text-muted">
                                    #1.04
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
                                    <div>
                                        <CustomInput type="checkbox" id="rightCheckbox1" label="" checked />
                                    </div>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
                                    <div>
                                        <CustomInput type="checkbox" id="rightCheckbox2" label="" />
                                    </div>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
                                    <div>
                                        <CustomInput type="checkbox" id="rightCheckbox3" label="" />
                                    </div>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Right Radio
                                <span className="small ml-1 text-muted">
                                    #1.05
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
                                    <div>
                                        <CustomInput type="radio" id="rightRadio1" name="customRadio" label="" checked />
                                    </div>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
                                    <div>
                                        <CustomInput type="radio" id="rightRadio2" name="customRadio" label="" />
                                    </div>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
                                    <div>
                                        <CustomInput type="radio" id="rightRadio3" name="customRadio" label="" />
                                    </div>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Left Icons
                                <span className="small ml-1 text-muted">
                                    #1.06
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-success"></i>
                                        <i className="fa fa-check fa-stack-1x text-white"></i>
                                    </span>
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        Success
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                        <i className="fa fa-close fa-stack-1x text-white"></i>
                                    </span>
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        Danger
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x text-warning"></i>
                                        <i className="fa fa-exclamation fa-stack-1x text-white"></i>
                                    </span>
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        Warning
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Left Radio
                                <span className="small ml-1 text-muted">
                                    #1.07
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left className="mr-3">
                                    <CustomInput type="radio" id="leftRadio1" name="leftRadio" label="" checked />
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <CustomInput type="radio" id="leftRadio2" name="leftRadio" label="" />
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <CustomInput type="radio" id="leftRadio3" name="leftRadio" label="" />
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Left Default
                                <span className="small ml-1 text-muted">
                                    #1.08
                                </span>
                            </CardTitle>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                            </Media>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                                                color="warning"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                            </Media>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                                                color="success"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Media: Color Header
                                <span className="small ml-1 text-muted">
                                    #1.09
                                </span>
                            </CardTitle>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1 text-success">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                                                color="success"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                            </Media>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1 text-danger">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                            </Media>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1 text-warning">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                                                color="warning"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Color Text
                                <span className="small ml-1 text-muted">
                                    #1.10
                                </span>
                            </CardTitle>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p className="text-muted">
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                            </Media>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p className="text-muted">
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                            </Media>
                            <Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p className="text-muted">
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media right top>
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Status Icon
                                <span className="small ml-1 text-muted">
                                    #1.12
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top>
                                    <i className="fa fa-circle text-danger"></i>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="warning"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top>
                                    <i className="fa fa-circle text-warning"></i>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="success"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top>
                                    <i className="fa fa-circle text-success"></i>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Right Icon
                                <span className="small ml-1 text-muted">
                                    #1.13
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top className="ml-2">
                                    <i className="fa fa-user"></i>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top className="ml-2">
                                    <i className="fa fa-gear"></i>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top className="ml-2">
                                    <i className="fa fa-exclamation-circle"></i>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Right Button
                                <span className="small ml-1 text-muted">
                                    #1.14
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top className="ml-2">
                                    <Button outline color="secondary" size="sm">
                                        <i className="fa fa-user fa-fw"></i>
                                    </Button>{' '}
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top className="ml-2">
                                    <Button outline color="secondary" size="sm">
                                        <i className="fa fa-gear fa-fw"></i>
                                    </Button>{' '}
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-4">
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
                                                color="secondary"
                                                key="avatar-icon-fg"
                                            />
                                        ]}
                                    /> 
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                                <Media left top className="ml-2">
                                    <Button outline color="secondary" size="sm">
                                        <i className="fa fa-exclamation-circle fa-fw"></i>
                                    </Button>{' '}
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Left Icons Single
                                <span className="small ml-1 text-muted">
                                    #1.15
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left top className="mr-3">
                                    <i class="fa fa-file-pdf-o fa-fw fa-lg text-danger"></i>
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        Document PDF
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <i class="fa fa-file-word-o fa-fw fa-lg text-primary"></i>
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        Document Word
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <i class="fa fa-file-excel-o fa-fw fa-lg text-success"></i>
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        Document Excell
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                Media: Left Checkbox
                                <span className="small ml-1 text-muted">
                                    #1.16
                                </span>
                            </CardTitle>
                            <Media>
                                <Media left className="mr-3">
                                    <CustomInput type="checkbox" id="leftCheckbox1" label="" checked />
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <CustomInput type="checkbox" id="leftCheckbox2" name="leftRadio" label="" />
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left top className="mr-3">
                                    <CustomInput type="checkbox" id="leftCheckbox3" name="leftRadio" label="" />
                                </Media>
                                <Media body>
                                    <span className="mt-0 d-flex h6 mb-1">
                                        { faker.name.firstName() } { faker.name.lastName() }
                                    </span>
                                    <p>
                                        { faker.lorem.sentence() }
                                    </p>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>     
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Media Text"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Media list and media object layouts
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}

        </Container>
    </React.Fragment>
);

export default MediaObjects;