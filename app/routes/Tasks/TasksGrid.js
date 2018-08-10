import React from 'react';

import { 
    CardColumns
} from './../../components';

import {
    TasksCardGrid
} from "../components/Tasks/TasksCardGrid";

const TasksGrid = () => (

        <CardColumns>
            <TasksCardGrid />
        </CardColumns>
);
export default TasksGrid;