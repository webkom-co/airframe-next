import React from 'react';
import _ from 'lodash';

import { CardColumns } from './../../components';
import { Paginations } from "../Paginations";
import { TasksCardGrid } from "./TasksCardGrid";

export const TasksGrid = () => (
    <React.Fragment>
        <CardColumns>
            {
                _.times(10, (index) =>
                    <TasksCardGrid id={`${index + 1}`} key={index}/>
                )
            }
        </CardColumns>
        <div className="d-flex justify-content-center">
            <Paginations />
        </div>
    </React.Fragment>
);
