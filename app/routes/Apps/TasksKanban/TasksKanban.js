import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardFooter,
    CardColumns,
    Badge,
    UncontrolledTooltip
} from './../../../components';

import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import { TasksCardGrid } from "../../components/Tasks/TasksCardGrid";

const TasksKanban = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <ProjectsSmHeader />
                    <CardColumns>
                        { /* START Card */}
                        <Card>
                            <CardBody>
                                { /* START Card Header */}
                                <div className="mb-4">
                                    <CardTitle tag="h6">
                                        To-Do
                                        <Badge pill color="secondary" className="ml-2">
                                            3
                                        </Badge>
                                    </CardTitle>
                                    <span className="small d-flex">
                                        16 Jun 2016 - 23 Aug 2016
                                        <span className="ml-auto">
                                            <a href="#" className="mr-2" id="TooltipSettings">
                                                <i className="fa fa-gear"></i>
                                            </a>
                                            <a href="#" className="mr-2" id="TooltipCollapse">
                                                <i className="fa fa-angle-down"></i>
                                            </a>
                                            <a href="#" id="TooltipAddNew">
                                                <i className="fa fa-plus"></i>
                                            </a>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Settings
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipSettings">
                                                Collapse
                                            </UncontrolledTooltip>
                                            <UncontrolledTooltip placement="top" target="TooltipAddNew">
                                                Add New
                                            </UncontrolledTooltip>
                                        </span>
                                    </span>
                                </div>
                            { /* END CardHeader */}
                            <TasksCardGrid />
                            </CardBody>
                            { /* START Card Footer */}
                            <CardFooter className="text-center">
                                <a href="#">
                                    <i className="fa fa-plus text-success mr-2"></i>
                                    Add Task
                                </a>
                            </CardFooter>
                            { /* END Card Footer */}
                        </Card>
                        { /* END Card */}
                        { /* START Card */}
                        <Card type="border-dash">
                            <CardBody className="d-flex align-items-center justify-content-center">
                                <a href="#" className="py-5">
                                    <i className="fa fa-plus text-success mr-2"></i>
                                    Add New Column
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */}
                    </CardColumns>
                </Col>
            </Row>
            { /* END Header 1 */}

        </Container>
    </React.Fragment>
);

export default TasksKanban;