import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../../features/HeaderMain";
import { ProjectsGrid } from '../../../features/Projects/ProjectsGrid';
import { ProjectsLeftNav } from "../../../features/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "../../../features/Projects/ProjectsSmHeader";

const Projects = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Projects"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader 
                        subTitle={"Projects Grid"}
                        linkList="/apps/projects/list"
                        linkGrid="/apps/projects/grid"
                    />

                    <ProjectsGrid />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Projects;
