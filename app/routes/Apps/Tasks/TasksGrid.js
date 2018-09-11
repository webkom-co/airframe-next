import React from 'react';

import { CardColumns } from './../../../components';
import { Paginations } from "../../components/Paginations";
import { TasksCardGrid } from "../../components/Tasks/TasksCardGrid";

const TasksGrid = () => (
    <React.Fragment>
        <CardColumns>
            <TasksCardGrid />
            <TasksCardGrid />
            <TasksCardGrid />
            <TasksCardGrid />
            <TasksCardGrid />
            <TasksCardGrid />
            <TasksCardGrid />
            <TasksCardGrid />
            <TasksCardGrid />
        </CardColumns>
        <div className="d-flex justify-content-center">
            <Paginations />
        </div>
    </React.Fragment>
);

export default TasksGrid;