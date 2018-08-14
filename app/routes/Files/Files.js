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
} from "../components/Files/FilesLeftNav";
import {
    ProjectsSmHeader
} from "../components/Projects/ProjectsSmHeader";


const Files = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <FilesLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader 
                        linkList="/files/list"
                        linkGrid="/files/grid"
                    />

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