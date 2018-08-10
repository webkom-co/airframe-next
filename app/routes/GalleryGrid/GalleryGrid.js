import React from 'react';

import { 
    Container,
    Row,
    CardColumns,
    Col
} from './../../components';

import {
    ProjectsSmHeader
} from "../components/Projects/ProjectsSmHeader";

import {
    GalleryCard
} from "../components/Gallery/GalleryCard";

const GalleryGrid = () => (
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                    <ProjectsSmHeader />
                    <CardColumns>
                        <GalleryCard />
                    </CardColumns>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default GalleryGrid;