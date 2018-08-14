import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../components';

import TasksList from './TasksList';
import TasksGrid from './TasksGrid';
import {
    ProjectsLeftNav
} from "../components/Projects/ProjectsLeftNav";
import {
    ProjectsSmHeader
} from "../components/Projects/ProjectsSmHeader";


const Tasks = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader 
                        linkList="/tasks/list"
                        linkGrid="/tasks/grid"
                    />

                    { 
                        props.match.params.type === "list" ?
                            <TasksList /> :
                            <TasksGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Tasks.propTypes = {
    match: PropTypes.object.isRequired
};


export default Tasks;