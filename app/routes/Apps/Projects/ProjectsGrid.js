import React from 'react';

import { CardColumns } from './../../../components';
import { ProjectsCardGrid } from "../../components/Projects/ProjectsCardGrid";
import { Paginations } from "../../components/Paginations";

const ProjectsGrid = () => (
    <React.Fragment>
        <CardColumns>
            <ProjectsCardGrid />
        </CardColumns>
        <div className="d-flex justify-content-center">
            <Paginations />
        </div>
    </React.Fragment>
);

export default ProjectsGrid;