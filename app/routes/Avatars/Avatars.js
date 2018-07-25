import React from 'react';

import { 
    Avatar,
    AvatarAddOn,
    Row,
    Container,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

import classes from './Avatars.scss';

const Home = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Avatars Sizes" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Sizes: Large
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                             <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                             <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Sizes: Default
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-1"
                            />
                             <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-1"
                            />
                             <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-1"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Sizes: Small
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-1"
                            />
                             <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-1"
                            />
                             <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-1"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 } className={ classes['avatars-box'] }>
                    <Avatar.Font
                        size="sm"
                        bgColor="danger"
                        addOns={[
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
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
                    >
                        <i className="fa fa-anchor" />
                    </Avatar.Font>
                    <Avatar.Font>
                        <i className="fa fa-user" />
                    </Avatar.Font>
                    <Avatar.Font
                        bgColor="success"
                        size="lg"
                        addOns={[
                            <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
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
                    >
                        <i className="fa fa-bluetooth" />
                    </Avatar.Font>
                </Col>

                <Col lg={ 4 } className={ classes['avatars-box'] }>
                    <Avatar.Font
                        size="sm"
                        bgColor="danger"
                        addOns={[
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
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
                    >
                        MK
                    </Avatar.Font>
                    <Avatar.Font
                        bgColor="info"
                    >
                        SM
                    </Avatar.Font>
                    <Avatar.Font
                        bgColor="success"
                        size="lg"
                        addOns={[
                            <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
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
                    >
                        PS
                    </Avatar.Font>
                </Col>

                <Col lg={ 4 } className={ classes['avatars-box'] }>
                    <Avatar.Image
                        size="sm"
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        addOns={[
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
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
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        addOns={[
                            <AvatarAddOn.Badge color="success" key="avatar-badge">
                                12
                            </AvatarAddOn.Badge>,
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
                        size="lg"
                        src="http://bs4.webkom.co/img/avatars/2.jpg"
                        addOns={[
                            <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                32156
                            </AvatarAddOn.Badge>,
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
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Avatars Types" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Photos
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                             <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                             <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Text
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font
                                bgColor="purple"
                                className="mr-1"
                            >
                                VN
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="secondary"
                                className="mr-1"
                            >
                                FS
                            </Avatar.Font>
                            <Avatar.Font
                                bgColor="danger"
                                className="mr-1"
                            >
                                +4
                            </Avatar.Font>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatars: Icons
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Font 
                                bgColor="200"
                                fgColor="500"
                                className="mr-1"
                                >
                                <i className="fa fa-user" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="200"
                                fgColor="500"
                                className="mr-1"
                                >
                                <i className="fa fa-plus" />
                            </Avatar.Font>
                            <Avatar.Font 
                                bgColor="200"
                                fgColor="500"
                                className="mr-1"
                                >
                                <i className="fa fa-bars" />
                            </Avatar.Font>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Avatars Status" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Status Large
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="lg"
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
                            <Avatar.Image
                                size="lg"
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
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
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
                                        color="warning"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
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
                                        color="secondary"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Status Default
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
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
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
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
                                        color="warning"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
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
                                        color="secondary"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Status Small
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Large size avatar example
                            </p>
                            <Avatar.Image
                                size="sm"
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
                            <Avatar.Image
                                size="sm"
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
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
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
                                        color="warning"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
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
                                        color="secondary"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Avatars Badges Pills" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Pills Small
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Pills Default
                                <span className="small ml-1 text-muted">
                                    #4.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Pills Small
                                <span className="small ml-1 text-muted">
                                    #4.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge pill color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 4 */}

            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Avatars Badges" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 5 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Small
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Default
                                <span className="small ml-1 text-muted">
                                    #5.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="md"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Badge color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Small
                                <span className="small ml-1 text-muted">
                                    #5.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="primary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="danger" key="avatar-badge">
                                        12
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                            <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="secondary" key="avatar-badge">
                                        4
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                             <Avatar.Image
                                size="sm"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-3"
                                addOns={[
                                    <AvatarAddOn.Badge color="success" key="avatar-badge">
                                        7
                                    </AvatarAddOn.Badge>
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 5 */}

            { /* START Header 6 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={6} 
                        title="Avatars Icons" 
                        subTitle={(
                            <React.Fragment>
                                There are versions available default, 
                                that is avatar: large: avatar <code>avatar-lg</code> & small: 
                                avatar <code>avatar-sm</code>.
                            </React.Fragment>
                        )}
                        className="mt-5"
                    />
                </Col>
            </Row>
            { /* END Header 6 */}
            { /* START Section 6 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Custom Icons Large
                                <span className="small ml-1 text-muted">
                                    #6.01
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-facebook"
                                        color="facebook"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-twitter"
                                        color="twitter"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
                                src="http://bs4.webkom.co/img/avatars/2.jpg"
                                className="mr-2"
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        className="fa fa-circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-linkedin"
                                        color="linkedin"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                            <Avatar.Image
                                size="lg"
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
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        className="fa fa-plus"
                                        color="white"
                                        key="avatar-icon-fg"
                                        small
                                    />
                                ]}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Default
                                <span className="small ml-1 text-muted">
                                    #5.02
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Avatar: Badges Small
                                <span className="small ml-1 text-muted">
                                    #5.03
                                </span>
                            </CardTitle>
                            <p className="card-text">
                                Avatars with badges
                            </p>
                           
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 6 */}
        </Container>
    </React.Fragment>
);

export default Home;