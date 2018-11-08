import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../../features/HeaderMain";
import { TasksList } from '../../../features/Tasks/TasksList';
import { ProjectsLeftNav } from "../../../features/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "../../../features/Projects/ProjectsSmHeader";

const TasksListRoute = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Tasks"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader
                        subTitle="Projects"
                        subTitleLink="/apps/projects/list"
                        title="Tasks List"
                        linkList="/apps/tasks/list"
                        linkGrid="/apps/tasks/grid"
                        btnShowKanban
                    />

                    <TasksList />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default TasksListRoute;
