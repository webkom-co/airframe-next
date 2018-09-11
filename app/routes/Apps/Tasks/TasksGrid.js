import React from 'react';

import { CardColumns } from './../../../components';

import { TasksCardGrid } from "../../components/Tasks/TasksCardGrid";

const TasksGrid = () => (
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
);

export default TasksGrid;