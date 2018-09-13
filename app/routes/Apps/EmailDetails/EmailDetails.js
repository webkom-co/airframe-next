import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { 
    Container,
    Row,
    Col,
    Card,
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    Badge,
    Media,
    Avatar,
    AvatarAddOn,
    UncontrolledTooltip
} from './../../../components';
import { randomAvatar } from './../../../utilities';

import { MailboxLeftNav } from "../../components/Mailbox/MailboxLeftNav";
import { Attachment } from "../../components/Attachment";

const EmailDetails = () => (
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
                            { /* START Header */}
                            <div className="d-lg-flex justify-content-end mb-4">
                                <div className="mr-auto d-flex align-items-center">
                                    <Button color="link" tag={ Link } to="/apps/inbox">
                                        <i className="fa fa-angle-left mr-2"></i>  Inbox
                                    </Button>
                                </div>
                                <ButtonGroup className="mr-2">
                                    <Button color="secondary" outline className="align-self-center" id="tooltipPrev">
                                        <i className="fa fa-fw fa-angle-left"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipPrev">
                                        Prev Message
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline id="tooltipNext">
                                        <i className="fa fa-fw fa-angle-right"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipNext">
                                        Next Message
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2">
                                    <Button color="secondary" outline className="align-self-center" id="tooltipForward">
                                        <i className="fa fa-fw fa-mail-forward"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipForward">
                                        Forward
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline className="align-self-center" id="tooltipFav">
                                        <i className="fa fa-fw fa-star"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipFav">
                                        Add to Favorites
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline className="align-self-center" id="tooltipPrint">
                                        <i className="fa fa-fw fa-print"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipPrint">
                                        Print
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline id="tooltipDelete">
                                        <i className="fa fa-fw fa-trash"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipDelete">
                                        Delete
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button color="primary" className="align-self-center" tag={ Link } to="/apps/inbox" id="tooltipReply">
                                        <i className="fa fa-fw fa-reply"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipReply">
                                        Reply
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                            </div>
                            { /* END Header */}
                            { /* START Message */}
                            <div className="mb-4">
                                <div className="d-flex">
                                    <Media>
                                        <Media left className="align-self-center mr-4">
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
                                            <samp className="small">
                                                { faker.internet.email() }
                                            </samp>
                                        </Media>
                                    </Media>
                                    <div className="ml-auto text-right">
                                        18-Jun-2012<br />
                                        08:43 PM
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex mb-3">
                                    <h5>
                                        Secured Asynchronous Capacity
                                    </h5>
                                    <Badge pill color="primary" className="ml-auto align-self-start">
                                        Work
                                    </Badge>
                                </div>
                                <p className="lead">
                                    { faker.lorem.sentences() }
                                </p>
                                <p>
                                    { faker.lorem.paragraphs() }
                                </p>
                            </div>
                            { /* END Message */}
                            { /* START Attachments */}
                            <div>
                                <div className="mb-3">
                                    <span className="small mr-2">
                                        Attachments
                                    </span>
                                    <Badge pill color="secondary">3</Badge>
                                </div>
                                <Attachment 
                                    BgIconClassName="text-primary"
                                    icon="file-word-o"
                                />
                                <Attachment 
                                    BgIconClassName="text-success"
                                    icon="file-excel-o"
                                />
                                <Attachment 
                                    BgIconClassName="text-warning"
                                    icon="file-powerpoint-o"
                                />
                            </div>
                        </CardBody>
                        <CardFooter className="text-right">
                            <div className="d-lg-flex justify-content-end">
                                <div className="mr-auto d-flex align-items-center">
                                </div>
                                <ButtonGroup className="mr-2">
                                    <Button color="secondary" outline className="align-self-center" id="tooltipPrevBtm">
                                        <i className="fa fa-fw fa-angle-left"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="top" target="tooltipPrevBtm">
                                        Prev Message
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline id="tooltipNextBtm">
                                        <i className="fa fa-fw fa-angle-right"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="top" target="tooltipNextBtm">
                                        Next Message
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2">
                                    <Button color="secondary" outline className="align-self-center" id="tooltipForwardBtm">
                                        <i className="fa fa-fw fa-mail-forward"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="top" target="tooltipForwardBtm">
                                        Forward
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline className="align-self-center" id="tooltipFavBtm">
                                        <i className="fa fa-fw fa-star"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="top" target="tooltipFavBtm">
                                        Add to Favorites
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline className="align-self-center" id="tooltipPrintBtm">
                                        <i className="fa fa-fw fa-print"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="top" target="tooltipPrintBtm">
                                        Print
                                    </UncontrolledTooltip>
                                    <Button color="secondary" outline id="tooltipDeleteBtm">
                                        <i className="fa fa-fw fa-trash"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="top" target="tooltipDeleteBtm">
                                        Delete
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button color="primary" className="align-self-center" tag={ Link } to="/apps/inbox" id="tooltipReplyBtm">
                                        <i className="fa fa-fw fa-reply"></i>
                                    </Button>
                                    <UncontrolledTooltip placement="top" target="tooltipReplyBtm">
                                        Reply
                                    </UncontrolledTooltip>
                                </ButtonGroup>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default EmailDetails;