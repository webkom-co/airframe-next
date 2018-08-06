import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../components';

import FilesList from './FilesList';
import FilesGrid from './FilesGrid';
import {
    FilesLeftNav
} from "../components/FilesLeftNav";
import {
    ProjectsSmHeader
} from "../components/ProjectsSmHeader";


const Files = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <FilesLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader />

                    { 
                        props.match.params.type === "list" ?
                            <FilesList /> :
                            <FilesGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Files.propTypes = {
    match: PropTypes.object.isRequired
};


export default Files;