import React from 'react';

import { 
    Button,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
} from './../../components';

const ProjectsSmHeader = () => (
    <React.Fragment>
        { /* START Header Nav */}
        <div className="d-flex justify-content-end">
            <Breadcrumb className="mr-auto d-flex align-items-center">
                <BreadcrumbItem active>
                    <i className="fa fa-home"></i>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Folder
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Page
                </BreadcrumbItem>
            </Breadcrumb>
            <ButtonGroup className="p-2">
                <Button color="secondary" outline className="align-self-center">
                    <i className="fa-fw fa fa-bars"></i>
                </Button>
                <Button color="secondary" outline className="align-self-center">
                    <i className="fa-fw fa fa-th-large"></i>
                </Button>
            </ButtonGroup>
            <Button color="secondary" className="align-self-center">
                <i className="fa-fw fa fa-plus"></i>
            </Button>
        </div>
        { /* END Header Nav */}
    </React.Fragment>
)

export { ProjectsSmHeader };
