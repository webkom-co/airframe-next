import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

import { 
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    Input,
    InputGroupAddon,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Media,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
} from './../../components';

import TasksList from './TasksList';
import TasksGrid from './TasksGrid';
import {
    ProjectsLeftNav
} from "../components/ProjectsLeftNav";

const Tasks = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    { /* START Header Nav */}
                    <div className="d-flex justify-content-end">
                        <Breadcrumb className="mr-auto d-flex align-items-center">
                            <BreadcrumbItem>
                                <a href="#">
                                    Projects
                                </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Tasks
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <ButtonGroup className="p-2">
                            <Button color="secondary" outline className="align-self-center">
                                <i className="fa-fw fa fa-bars"></i>
                            </Button>
                            <Button color="secondary" outline className="align-self-center">
                                <i className="fa-fw fa fa-th-large"></i>
                            </Button>
                            <Button color="secondary" outline className="align-self-center">
                                <i className="fa-fw fa fa-trello"></i>
                            </Button>
                        </ButtonGroup>
                        <Button color="primary" className="align-self-center">
                            <i className="fa-fw fa fa-plus"></i>
                        </Button>
                    </div>
                    { /* END Header Nav */}

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