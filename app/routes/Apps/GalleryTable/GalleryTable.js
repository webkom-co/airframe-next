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
} from './../../../components';

import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import { Paginations } from "../../components/Paginations";

import { TrTableGalleryList } from "./components/TrTableGalleryList";

const GalleryTable = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                    <ProjectsSmHeader 
                        subTitle="Gallery Table"
                        linkList="/apps/gallery-table"
                        linkGrid="/apps/gallery-grid"
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
                                <TrTableGalleryList />
                                <TrTableGalleryList />
                                <TrTableGalleryList />
                                <TrTableGalleryList />
                                <TrTableGalleryList />
                                <TrTableGalleryList />
                                <TrTableGalleryList />
                                <TrTableGalleryList />
                            </tbody>
                        </Table>
                        { /* END Table */}
                        <CardFooter className="d-flex justify-content-center pb-0">
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