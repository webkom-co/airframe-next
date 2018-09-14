import React from 'react';

import { 
    Container,
    Row,
    CardColumns,
    Col
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import { GalleryCard } from "../../components/Gallery/GalleryCard";
import { Paginations } from "../../components/Paginations";

const GalleryGrid = () => (
    <Container>
        <HeaderMain 
            title="Gallery Grid"
            className="mb-5 mt-4"
        />
        { /* START Content */}
        <Row>
            <Col lg={ 12 }>
                <ProjectsSmHeader 
                    subTitle="Gallery Grid"
                    linkList="/apps/gallery-table"
                    linkGrid="/apps/gallery-grid"
                />
                <CardColumns>
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </CardColumns>
                <div className="d-flex justify-content-center">
                    <Paginations />
                </div>
            </Col>
        </Row>
        { /* END Content */}
    </Container>
);

export default GalleryGrid;