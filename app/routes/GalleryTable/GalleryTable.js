import React from 'react';
import faker from 'faker';

import { 
    Container,
    Row,
    Avatar,
    Media,
    UncontrolledTooltip,
    Button,
    HolderProvider,
    Table,
    AvatarAddOn,
    CardImg,
    CustomInput,
    CardFooter,
    Badge,
    Card,
    Col
} from './../../components';

import {
    ProjectsSmHeader
} from "../components/Projects/ProjectsSmHeader";

import {
    Paginations
} from "../components/Paginations";

const GalleryTable = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                    <ProjectsSmHeader 
                        linkList="/gallerytable"
                        linkGrid="/gallerygrid"
                    />
                    <Card>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Thumb</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Date</th>
                                    <th>Info</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { /* START TR */}
                                <tr>
                                    <td className="align-middle">
                                        <CustomInput type="checkbox" id="clientCheckbox" label="" inline />
                                    </td>
                                    <td className="align-middle">
                                        <HolderProvider.Icon
                                            iconChar=""
                                            size={ 16 }
                                            width={ 100 }
                                            height={ 100 }
                                        >
                                            <CardImg className="rounded" />
                                        </HolderProvider.Icon>
                                    </td>
                                    <td className="align-middle">
                                        <span>
                                            <a className="text-inverse">
                                                { faker.commerce.productName() }
                                            </a>
                                            <br />
                                            <span href="#">
                                                { faker.system.fileName() }
                                            </span>
                                            <br />
                                            <Badge pill color="primary" className="mr-1">
                                                { faker.commerce.department() }
                                            </Badge>
                                            <Badge pill color="secondary" className="mr-1">
                                                { faker.commerce.department() }
                                            </Badge>
                                            <Badge pill color="secondary" className="mr-1">
                                                { faker.commerce.department() }
                                            </Badge>
                                        </span>
                                    </td>
                                    <td className="align-middle">
                                        <Media>
                                            <Media left className="align-self-center mr-3">
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
                                                    { faker.address.state() }, { faker.address.stateAbbr() } 
                                                </span>
                                            </Media>
                                        </Media>
                                    </td>
                                    <td className="align-middle">
                                        22-Jul-2012
                                    </td>
                                    <td className="align-middle">
                                        Size: { faker.random.number() } Kb<br />
                                        Format: .png
                                    </td>
                                    <td className="align-middle text-right">
                                        <Button color="secondary" outline id="tooltipDownload">
                                            <i className="fa fa-download"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="tooltipDownload">
                                           Download
                                        </UncontrolledTooltip>
                                    </td>
                                </tr>
                            { /* END TR */}
                            </tbody>
                        </Table>
                        { /* END Table */}
                        <CardFooter className="d-flex justify-content-center">
                            <Paginations />    
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default GalleryTable;