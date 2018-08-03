import React from 'react';
import faker from 'faker';

import { 
    Badge,
    Avatar,
    Card,
    Media,
    CardBody,
    CustomInput,
    CardColumns,
    CardFooter,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../components';

import {
    TasksCardGrid
} from "../components/TasksCardGrid";

const TasksGrid = () => (

        <CardColumns>
            <TasksCardGrid />
        </CardColumns>
);
export default TasksGrid;