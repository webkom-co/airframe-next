import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../components';

import ProjectsList from './ProjectsList';
import ProjectsGrid from './ProjectsGrid';
import {
    ProjectsLeftNav
} from "../components/Projects/ProjectsLeftNav";
import {
    ProjectsSmHeader
} from "../components/Projects/ProjectsSmHeader";


const Projects = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader />

                    { 
                        props.match.params.type === "list" ?
                            <ProjectsList /> :
                            <ProjectsGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Projects.propTypes = {
    match: PropTypes.object.isRequired
};


export default Projects;